"use client";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { SaveTemplateModal } from "../modals/TemplateModal";

export default function TemplateForm({
  formHeading,
  dialogTitle,
  templateData,
  // will extract the template data from here
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);

  const handleSaveData = () => {};

  const handleSendMail = () => {};

  return (
    <>
      {/* TODO : Center this div */}
      <div className="w-full px-8 md:px-0 max-w-sm mx-auto flex flex-col flex-grow gap-10 items-center justify-center">
        <h1 className="text-3xl text-black font-semibold text-center">
          {formHeading}
        </h1>
        {/* TODO : Add form validation here */}
        <form className="w-full">
          <div className="flex flex-col gap-6 w-full">
            <div className="grid gap-2">
              <Label htmlFor="to">To</Label>
              <Input id="to" type="text" placeholder="m@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="templateName">Template Name</Label>
              <Input
                id="templateName"
                type="text"
                placeholder="Frontend Job Template"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                type="text"
                placeholder="Frontend Developer"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="body">Body</Label>
              <Textarea
                rows={10}
                id="body"
                type="text"
                placeholder="Type Email Body here..."
              />
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                className="w-full"
                onClick={handleModalOpen}
              >
                Save
              </Button>
              <Button type="submit" className="w-full" onClick={handleSendMail}>
                Send
              </Button>
            </div>
          </div>
        </form>
      </div>
      <SaveTemplateModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onSave={handleSaveData}
        data={templateData}
        dialogTitle={dialogTitle}
      />
    </>
  );
}
