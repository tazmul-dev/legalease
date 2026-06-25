"use client";
import {ArrowUpToLine, Envelope} from "@gravity-ui/icons";
import {Button, FieldError, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { useState } from "react";


const ModalUpdet = ({service}) => {
  console.log(service)
  const [errors, setErrors] = useState({});
    const [imageUrl, setImageUrl] = useState("");
    const [isUploading, setIsUploading] = useState(false);
    const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        image: "Image must be under 5MB",
      }));
      return;
    }

    try {
      setIsUploading(true);

      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setImageUrl(data.data.url);
      }
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        image: "Upload failed",
      }));
    } finally {
      setIsUploading(false);
    }
  };

   return (
    <Modal>
      <Button variant="secondary">Edit</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text" variant="secondary">
                    <Label>Name</Label>
                    <Input defaultValue={'tazmul'}  placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="email" type="email" variant="secondary">
                    <Label>Email</Label>
                    <Input  placeholder="Enter your email" />
                  </TextField>
                        <div className="flex flex-col gap-1">

            <span className="text-zinc-400 text-sm font-medium">
              Professional Photo
            </span>

            <div className="flex items-center gap-4">

              <label className="w-16 h-16 border border-dashed border-zinc-700 rounded-xl flex items-center justify-center cursor-pointer overflow-hidden">

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />

                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <ArrowUpToLine
                    size={20}
                    className="text-zinc-400"
                  />
                )}

              </label>

              <div>
                <p className="text-sm text-zinc-300">
                  {isUploading
                    ? "Uploading..."
                    : "Upload Photo"}
                </p>

                <p className="text-xs text-zinc-500">
                  JPG, PNG up to 5MB
                </p>
              </div>

            </div>

            {errors.image && (
              <FieldError className="text-danger text-xs mt-1">
                {errors.image}
              </FieldError>
            )}

          </div>
                  <TextField className="w-full" name="company" variant="secondary">
                    <Label>Company</Label>
                    <Input placeholder="Enter your company name" />
                  </TextField>
                  <TextField className="w-full" name="message" variant="secondary">
                    <Label>Message</Label>
                    <Input placeholder="Enter your message" />
                  </TextField>
                    <Button type="submit" slot="close">Send Message</Button>
                </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default ModalUpdet;