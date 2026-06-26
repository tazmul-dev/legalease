"use client";
import { ArrowUpToLine, Envelope } from "@gravity-ui/icons";
import { Button, FieldError, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useState } from "react";


const ModalUpdet = ({ service }) => {
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
    
  const handleSubmit =(e)=>{
     e.preventDefault();

    const form = e.target;

    const updatedProfile = {
      name: form.name.value,
      image: imageUrl,
    };

    console.log(updatedProfile);


  }

  return (
    <Modal>
      <Button variant="secondary">Edit</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form
                  onSubmit={handleSubmit}
                  className="bg-white p-6 rounded-2xl shadow space-y-5"
                >
                  <h2 className="text-2xl font-bold">
                    Update Profile
                  </h2>

                  <div>
                    <label>
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      defaultValue={"tazmul"}
                      className="w-full border p-3 rounded-lg"
                    />
                  </div>

                  <div>
                    <label>
                      Email
                    </label>

                    <input
                      type="email"
                      value={"skdjfieru"}
                      readOnly
                      className="w-full border p-3 rounded-lg bg-gray-100"
                    />
                  </div>

                  <div>
                    <label>
                      Profile Picture
                    </label>

                    <input
                      type="file"
                      onChange={handleImageUpload}
                      className="w-full"
                    />
                  </div>

                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt="Preview"
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  )}

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-lg"
                  >
                    Update Profile
                  </button>
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