"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SaveTemplateModal({
  dialogTitle,
  isModalOpen,
  setIsModalOpen,
  onSave,
  // to store in the db or to send a mail
  data,
}) {
  return (
    <Dialog open={isModalOpen} modal onOpenChange={setIsModalOpen}>
      <DialogContent className="max-w-[330px] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>
            Enter comma separated tags to save your template. Click save when
            you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3">
          <Label htmlFor="tags" className="text-left">
            Tags
          </Label>
          <Input id="tags" type="text" placeholder="frontend, job, template" />
        </div>

        <DialogFooter>
          <Button type="submit" onClick={onSave}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
