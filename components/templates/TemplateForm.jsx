"use client";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { validationRules } from "@/lib/validationRules";
import ShowError from "../ui/error";

export default function TemplateForm({
  formHeading,
  dialogTitle,
  templateData,
  // will extract the template data from here
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleChange = () => {};

  const handleSaveTemplate = (data) => {
    // api call to save template
    console.log(data);
    reset();
  };

  return (
    <>
      {/* TODO : Center this div */}
      <div className="w-full px-8 md:px-0 max-w-sm mx-auto flex flex-col gap-10 items-center justify-center py-10">
        <h1 className="text-3xl text-black font-semibold text-center">
          {formHeading}
        </h1>
        {/* TODO : Add form validation here */}
        <form className="w-full" onSubmit={handleSubmit(handleSaveTemplate)}>
          <div className="flex flex-col gap-6 w-full">
            <div className="grid gap-2">
              <Label htmlFor="to">To</Label>
              <Input
                id="to"
                type="text"
                placeholder="m@example.com"
                {...register("to", {
                  pattern: validationRules.email.pattern,
                })}
                aria-invalid={errors.to ? "true" : "false"}
                onChange={handleChange()}
              />
              {errors.to && <ShowError message={errors.to.message} />}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="templateName">Template Name</Label>
              <Input
                id="templateName"
                type="text"
                placeholder="Frontend Job Template"
                {...register("templateName", {
                  required: "Template name is required!",
                })}
                aria-invalid={errors.templateName ? "true" : "false"}
              />
              {errors.templateName && (
                <ShowError message={errors.templateName.message} />
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                type="text"
                placeholder="Frontend Developer"
                {...register("subject", {
                  required: "Subject is required!",
                })}
                aria-invalid={errors.subject ? "true" : "false"}
              />
              {errors.subject && <ShowError message={errors.subject.message} />}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="tags">Tags</Label>
              <Input
                id="tags"
                type="text"
                placeholder="frontend, template, job"
                {...register("tags", {
                  required: "Tags are required!",
                })}
                aria-invalid={errors.tags ? "true" : "false"}
              />
              {errors.tags && <ShowError message={errors.tags.message} />}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="body">Body</Label>
              <Textarea
                rows={10}
                id="body"
                type="text"
                placeholder="Type Email Body here..."
                {...register("body", {
                  required: "Body is required!",
                })}
                aria-invalid={errors.body ? "true" : "false"}
              />
              {errors.body && <ShowError message={errors.body.message} />}
            </div>
            <div className="flex gap-2">
              <Button type="submit" className="w-full">
                Save
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
