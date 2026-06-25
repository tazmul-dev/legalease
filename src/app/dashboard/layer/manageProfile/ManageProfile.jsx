
'use client';

import React, { useState } from 'react';
import {
  Form,
  Fieldset,
  TextField,
  TextArea,
  Label,
  Input,
  FieldError,
  Select,
  ListBox,
  Button,
} from '@heroui/react';

import {
  ArrowUpToLine,
  ChevronDown,
} from '@gravity-ui/icons';



const textInputClass =
  "w-full  border border-zinc-800  rounded-lg px-3 py-2.5 outline-none";

const triggerClasses =
  "w-full  border border-zinc-800 rounded-lg px-3 py-2.5 flex items-center justify-between";

const popoverClasses =
  " border border-zinc-800 rounded-lg p-1 shadow-xl min-w-[200px]";

const listItemClasses =
  " px-3 py-2 rounded-md cursor-pointer";

const textAreaClass =
  " border border-zinc-800 rounded-lg p-3 outline-none resize-none";





const ManageProfile = ({user, createService}) => {
    const userId = user?.id
    // console.log(userId, "UserId")
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

  const handleSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const lowyerData = {
      image: imageUrl,
      name: formData.get("name"),
      category: formData.get("category"),
      summary: formData.get("summary"),
      consultationFee: formData.get("consultationFee"),
      dateJoined: formData.get("dateJoined"),
      status: "Available",
      userId:userId
    };

      const service = await createService(lowyerData)

     


  //   const res = await fetch(`http://localhost:5000/service`,{
  //      method: 'POST',
  //     headers: {
  //           'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(lowyerData),
  //   })
      
  //   const data = await res.json()
  };

  return (
    <div className="max-w-3xl mx-auto my-8 bg-gray-200 p-8 border border-zinc-900 rounded-xl">

      <Form
        onSubmit={handleSubmit}
        className="space-y-8"
      >
        <Fieldset className="space-y-6 w-full">

          <legend className="text-xl font-semibold text-zinc-200 border-b border-zinc-900 w-full pb-3">
            Create Lawyer Service
          </legend>

          {/* Name + Fee */}
          <div className="grid md:grid-cols-2 gap-6">

            <TextField
              name="name"
              className="flex flex-col gap-1"
            >
              <Label className="text-zinc-400 text-sm">
                Service Name
              </Label>

              <Input
                placeholder="Criminal Defense Expert"
                className={textInputClass}
              />
            </TextField>

            <TextField
              name="consultationFee"
              className="flex flex-col gap-1"
            >
              <Label className="text-zinc-400 text-sm">
                Consultation Fee
              </Label>

              <Input
                type="number"
                placeholder="1000"
                className={textInputClass}
              />
            </TextField>

          </div>

          {/* Category + Date */}
          <div className="grid md:grid-cols-2 gap-6">

            <Select name="category">
              <Label className="text-zinc-400 text-sm mb-1 block">
                Category
              </Label>

              <Select.Trigger className={triggerClasses}>
                <Select.Value />
                <Select.Indicator>
                  <ChevronDown size={16} />
                </Select.Indicator>
              </Select.Trigger>

              <Select.Popover className={popoverClasses}>
                <ListBox>
                  <ListBox.Item
                    id="criminal"
                    className={listItemClasses}
                  >
                    Criminal Law
                  </ListBox.Item>

                  <ListBox.Item
                    id="family"
                    className={listItemClasses}
                  >
                    Family Law
                  </ListBox.Item>

                  <ListBox.Item
                    id="corporate"
                    className={listItemClasses}
                  >
                    Corporate Law
                  </ListBox.Item>

                  <ListBox.Item
                    id="civil"
                    className={listItemClasses}
                  >
                    Civil Law
                  </ListBox.Item>

                  <ListBox.Item
                    id="cyber"
                    className={listItemClasses}
                  >
                    Cyber Law
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>

            <TextField
              name="dateJoined"
              className="flex flex-col gap-1"
            >
              <Label className="text-zinc-400 text-sm">
                Date Joined
              </Label>

              <Input
                type="date"
                className={textInputClass}
              />
            </TextField>

          </div>

          {/* Image Upload */}
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

          {/* Summary */}
          <TextField
            name="summary"
            className="flex flex-col gap-1"
          >
            <Label className="text-zinc-400 text-sm">
              Professional Summary
            </Label>

            <TextArea
              rows={5}
              placeholder="Describe your expertise, experience and legal services..."
              className={textAreaClass}
            />
          </TextField>

        </Fieldset>

        <div className="flex justify-end border-t border-zinc-900 pt-5 w-full">

          <Button
            type="submit"
            className="bg-white text-black font-semibold px-6 h-11 rounded-lg"
          >
            Create Service
          </Button>

        </div>
      </Form>
    </div>
  );
   
};

export default ManageProfile;