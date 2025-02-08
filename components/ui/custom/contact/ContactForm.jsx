"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { validationRules } from "@/lib/validationRules";
import ShowError from "../../error";
import { useForm } from "react-hook-form";
import { Textarea } from "../../textarea";
import BlackLargeHeading from "../text/Heading";

export default function ContactForm({ className, ...props }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSendEmail = () => {};

  return (
    <div
      className={cn(
        "flex flex-col gap-6 max-w-sm w-full mx-auto mb-7",
        className
      )}
      {...props}
    >
      <BlackLargeHeading heading="Contact Me" />
      <h2 className="text-gray-700 text-sm text-center">
        If you have any suggestions to improve this app, feature requests, or if
        you're facing any issues, please feel free to reach out to me at
        rumaisanaved@gmail.com or use the form below to submit your query.
      </h2>
      <form onSubmit={handleSubmit(handleSendEmail)}>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="email"
              type="text"
              placeholder="Enter your name"
              {...register("email", validationRules.username)}
            />
            {errors.username && <ShowError message={errors.username.message} />}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="text"
              placeholder="Enter your email"
              {...register("email", validationRules.email)}
            />
            {errors.email && <ShowError message={errors.email.message} />}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              rows={10}
              id="message"
              type="text"
              placeholder="Type your message here..."
            />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
}
