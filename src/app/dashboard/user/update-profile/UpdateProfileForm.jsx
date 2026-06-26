"use client";

import { useState } from "react";

export default function UpdateProfileForm({ user }) {
  const [imageUrl, setImageUrl] = useState(
    user?.image || ""
  );

  const handleImageUpload = async (e) => {
    const image = e.target.files[0];

    const formData = new FormData();
    formData.append("image", image);

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    setImageUrl(data.data.url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedProfile = {
      name: form.name.value,
      image: imageUrl,
    };

    console.log(updatedProfile);

    // PATCH Request
  };

  return (
    <div className="max-w-xl mx-auto">
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
            defaultValue={user?.name}
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <label>
            Email
          </label>

          <input
            type="email"
            value={user?.email}
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
    </div>
  );
}