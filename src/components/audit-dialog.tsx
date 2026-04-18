"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { submitAuditAction } from "@/app/actions/audit";
import { AuditSchema, type AuditFormData } from "@/lib/schemas";
import { CheckCircle2 } from "lucide-react";

interface AuditDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AuditDialog({ open, onOpenChange }: AuditDialogProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuditFormData>({
    resolver: zodResolver(AuditSchema),
  });

  // Reset success state when dialog is closed
  React.useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => setIsSuccess(false), 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const onSubmit = async (data: AuditFormData) => {
    setIsSubmitting(true);
    try {
      const result = await submitAuditAction(data);
      if (result.success) {
        setIsSuccess(true);
        reset();
      } else {
        toast({
          variant: "destructive",
          title: "Submission Error",
          description: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Unexpected Error",
        description: "A network error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-midnight-surface border-copper/20 text-cream max-w-[500px] p-0 overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-copper/30 pointer-events-none" />
        
        {isSuccess ? (
          <div className="p-12 text-center space-y-8 animate-in fade-in zoom-in duration-500">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-copper/10 flex items-center justify-center border border-copper/20">
                <CheckCircle2 className="w-10 h-10 text-copper" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="font-headline text-3xl text-cream">Submission Received</h2>
              <p className="text-secondary text-[0.95rem] leading-relaxed font-light">
                Your query has been submitted. Our team will contact you soon to finalize your 20-minute roadmap session.
              </p>
            </div>

            <Button 
              onClick={() => onOpenChange(false)}
              className="w-full font-body text-[0.8rem] tracking-[0.2em] uppercase bg-copper text-midnight h-14 rounded-none hover:bg-copper-light transition-all duration-400 font-medium"
            >
              Return to Site
            </Button>
          </div>
        ) : (
          <div className="p-8 sm:p-12">
            <DialogHeader className="text-left space-y-4 mb-8">
              <div className="text-[0.65rem] tracking-[0.4em] uppercase text-copper font-body">
                Step One
              </div>
              <DialogTitle className="font-headline text-3xl sm:text-4xl font-normal leading-tight">
                Let&apos;s build your <span className="text-copper italic">authority.</span>
              </DialogTitle>
              <DialogDescription className="text-secondary text-[0.95rem] leading-relaxed font-light">
                Provide a few details below. We&apos;ll review your current presence and prepare a 20-minute deep dive roadmap for your brand.
              </DialogDescription>
            </DialogHeader>

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[0.75rem] uppercase tracking-widest text-muted font-light">Full Name</Label>
                <Input 
                  id="name" 
                  {...register("name")}
                  placeholder="Alexander Knight" 
                  className="bg-midnight border-copper/10 focus:border-copper/40 rounded-none h-12 text-cream placeholder:text-muted/50"
                />
                {errors.name && <p className="text-[0.65rem] text-accent mt-1">{errors.name.message}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[0.75rem] uppercase tracking-widest text-muted font-light">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  {...register("email")}
                  placeholder="alex@company.com" 
                  className="bg-midnight border-copper/10 focus:border-copper/40 rounded-none h-12 text-cream placeholder:text-muted/50"
                />
                {errors.email && <p className="text-[0.65rem] text-accent mt-1">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedin" className="text-[0.75rem] uppercase tracking-widest text-muted font-light">LinkedIn Profile URL</Label>
                <Input 
                  id="linkedin" 
                  {...register("linkedin")}
                  placeholder="linkedin.com/in/username" 
                  className="bg-midnight border-copper/10 focus:border-copper/40 rounded-none h-12 text-cream placeholder:text-muted/50"
                />
                {errors.linkedin && <p className="text-[0.65rem] text-accent mt-1">{errors.linkedin.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[0.75rem] uppercase tracking-widest text-muted font-light">Phone Number</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  {...register("phone")}
                  placeholder="+1 (555) 000-0000" 
                  className="bg-midnight border-copper/10 focus:border-copper/40 rounded-none h-12 text-cream placeholder:text-muted/50"
                />
                {errors.phone && <p className="text-[0.65rem] text-accent mt-1">{errors.phone.message}</p>}
              </div>

              <div className="pt-4">
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-body text-[0.8rem] tracking-[0.2em] uppercase bg-copper text-midnight h-14 rounded-none hover:bg-copper-light transition-all duration-400 font-medium disabled:opacity-50"
                >
                  {isSubmitting ? "Processing..." : "Secure My Audit"}
                </Button>
                <p className="text-[0.65rem] text-center text-muted mt-4 font-light tracking-wide">
                  Your data is handled with discretion. No spam, just substance.
                </p>
              </div>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
