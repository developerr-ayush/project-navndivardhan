"use client";
import axios from "axios";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Title } from "../title";
import BasicSelect from "../select-dropdown";
import { SelectChangeEvent } from "@mui/material";

interface FormData {
  title: string;
  name: string;
  email: string;
  phone: string;
  residencyType: string;
  priceRange: string;
  howHeard: string;
}

interface SelectItem {
  id: number;
  name: string;
}

const residency: SelectItem[] = [
  { id: 1, name: "1 Bed" },
  { id: 2, name: "2 Bed" },
  { id: 3, name: "3 Bed" },
  { id: 4, name: "4 - 5 Bed" },
];

const priceRange: SelectItem[] = [
  { id: 1, name: "75L - 1CR" },
  { id: 2, name: "1CR - 2CR" },
  { id: 3, name: "2CR - 2.5CR" },
  { id: 4, name: "2.5CR - 5CR" },
];

const howHeard: SelectItem[] = [
  { id: 1, name: "Agents" },
  { id: 2, name: "Advert" },
  { id: 3, name: "Hoarding" },
  { id: 4, name: "Word of mouth" },
  { id: 5, name: "Press Article" },
  { id: 6, name: "Search Engine" },
];

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [formValues, setFormValues] = useState<FormData>({
    title: "",
    name: "",
    email: "",
    phone: "",
    residencyType: "",
    priceRange: "",
    howHeard: "",
  });

  const onSubmit = async () => {
    setIsSubmitting(true);

    const payload = {
      email: formValues.email,
      phone_number: formValues.phone,
      residence_type: parseInt(formValues.residencyType), // Use ID of residence type
      price_range: formValues.priceRange
        .split("-")
        .map((price) => parseInt(price.trim())), // Convert to array of integers
      how_did_you_hear: parseInt(formValues.howHeard), // Use ID of how user heard
    };

    try {
      const response = await axios.post(
        "https://api-nandivardhan.codestudioshub.com/api/contact/contact-us/",
        payload
      );
      console.log(response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-2xl text-center col-span-2 -order-1">
        <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] mb-2 news-title">
          Enquire Now
        </Title>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-10 max-w-xl w-full"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Controller
              name="title"
              control={control}
              rules={{ required: "Title is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Title"
                  variant="outlined"
                  className="w-full"
                  error={!!errors.title}
                  helperText={errors.title?.message}
                  value={formValues.title}
                  onChange={(e) => {
                    field.onChange(e);
                    setFormValues({ ...formValues, title: e.target.value });
                  }}
                />
              )}
            />
          </div>
          <div className="sm:col-span-1">
            <Controller
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Name"
                  variant="outlined"
                  className="w-full"
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  value={formValues.name}
                  onChange={(e) => {
                    field.onChange(e);
                    setFormValues({ ...formValues, name: e.target.value });
                  }}
                />
              )}
            />
          </div>
          <div className="sm:col-span-1">
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="outlined"
                  className="w-full"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  value={formValues.email}
                  onChange={(e) => {
                    field.onChange(e);
                    setFormValues({ ...formValues, email: e.target.value });
                  }}
                />
              )}
            />
          </div>
          <div className="sm:col-span-2">
            <Controller
              name="phone"
              control={control}
              rules={{
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number (10 digits required)",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Phone number"
                  variant="outlined"
                  className="w-full"
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                  value={formValues.phone}
                  onChange={(e) => {
                    field.onChange(e);
                    setFormValues({ ...formValues, phone: e.target.value });
                  }}
                />
              )}
            />
          </div>
          <div className="sm:col-span-2">
            <Controller
              name="residencyType"
              control={control}
              rules={{ required: "Residency type is required" }}
              render={({ field }) => (
                <BasicSelect
                  {...field}
                  itemList={residency}
                  label="Residency type"
                  error={!!errors.residencyType}
                  value={formValues.residencyType}
                  onChange={(e: SelectChangeEvent) => {
                    field.onChange(e);
                    setFormValues({
                      ...formValues,
                      residencyType: e.target.value as string,
                    });
                  }}
                />
              )}
            />
          </div>
          <div className="sm:col-span-2">
            <Controller
              name="priceRange"
              control={control}
              rules={{ required: "Price range is required" }}
              render={({ field }) => (
                <BasicSelect
                  {...field}
                  itemList={priceRange}
                  label="Price Range"
                  error={!!errors.priceRange}
                  value={formValues.priceRange}
                  onChange={(e: SelectChangeEvent) => {
                    field.onChange(e);
                    setFormValues({
                      ...formValues,
                      priceRange: e.target.value as string,
                    });
                  }}
                />
              )}
            />
          </div>
          <div className="sm:col-span-2">
            <Controller
              name="howHeard"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <BasicSelect
                  {...field}
                  itemList={howHeard}
                  label="How did you hear about us?"
                  error={!!errors.howHeard}
                  helperText={errors.howHeard?.message}
                  value={formValues.howHeard}
                  onChange={(e: SelectChangeEvent) => {
                    field.onChange(e);
                    setFormValues({
                      ...formValues,
                      howHeard: e.target.value as string,
                    });
                  }}
                />
              )}
            />
          </div>
          <div className="sm:col-span-2">
            <p className="text-sm text-gray-500">
              By submitting this form, I confirm that my personal data may be
              collected in accordance with your Privacy Policy, and my details
              will be shared with your appointed agents.
            </p>
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="block w-full rounded-md bg-[#bb8866] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#7d4520] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Let's talk"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
