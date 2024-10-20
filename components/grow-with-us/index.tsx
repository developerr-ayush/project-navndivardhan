"use client";
import React, { useState } from "react";
import { Title } from "@/data/atom/title";
import { TextField, MenuItem, FormControl, InputLabel } from "@mui/material";
import { SectionWrapper } from "../section-wrapper";
import { Button } from "../ui/button";

interface FormData {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
  applyingFor: string;
  resume: File | null;
}

export const GrowWithUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    applyingFor: "",
    resume: null,
  });

  // New state for the file name
  const [fileName, setFileName] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type, files } = e.target as HTMLInputElement;

    if (type === "file") {
      const selectedFile = files?.[0] || null;
      setFileName(selectedFile ? selectedFile.name : ""); // Set the file name
      setFormData({
        ...formData,
        [name]: selectedFile,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a FormData object for file upload
    const payload = new FormData();
    Object.keys(formData).forEach((key) => {
      const value = formData[key as keyof FormData];
      if (key === "resume" && value) {
        payload.append(key, value); // Append only if resume is not null
      } else if (typeof value === "string") {
        payload.append(key, value);
      }
    });

    // Sending the data to the backend
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        body: payload,
      });

      if (response.ok) {
        // Handle success
        console.log("Form submitted successfully");
      } else {
        // Handle error
        console.error("Form submission error");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <SectionWrapper className="p-[3vw]">
      <div className="head max-w-[70rem] mx-auto lg:text-center mb-8 lg:mb-3">
        <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] project-title text-center">
          Grow With Us
        </Title>
        <p className="text-[1.4rem] lg:text-[2.6rem] mb-8 project-desc text-center leading-none">
          Submit your details below
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="container mx-auto mb-10 lg:px-[10rem]"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="input">
            <TextField
              className="w-full"
              id="first-name"
              label="First Name"
              name="firstName"
              variant="outlined"
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <TextField
              className="w-full"
              id="last-name"
              label="Last Name"
              name="lastName"
              variant="outlined"
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <TextField
              className="w-full"
              id="mobile-number"
              label="Mobile Number"
              name="mobileNumber"
              variant="outlined"
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <TextField
              className="w-full"
              id="email"
              label="Email Address"
              name="email"
              variant="outlined"
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <TextField
              className="w-full"
              id="applying-for"
              select
              label="Applying For"
              name="applyingFor"
              variant="outlined"
              onChange={handleChange}
            >
              <MenuItem value="frontend">Frontend Developer</MenuItem>
              <MenuItem value="backend">Backend Developer</MenuItem>
              <MenuItem value="fullstack">Full Stack Developer</MenuItem>
              <MenuItem value="designer">Designer</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </TextField>
          </div>
          <div className="input">
            <FormControl fullWidth>
              {fileName ? (
                <InputLabel htmlFor="resume">{fileName}</InputLabel>
              ) : (
                <InputLabel htmlFor="resume">Upload Resume</InputLabel>
              )}

              <TextField
                className="w-full"
                id="resume"
                name="resume"
                type="file"
                variant="outlined"
                inputProps={{ accept: ".pdf,.doc,.docx" }} // Optional: restrict file types
                onChange={handleChange}
                sx={{
                  "& input": {
                    opacity: 0, // Hide the actual file input
                  },
                }}
              />
            </FormControl>
          </div>
          <div className="sm:col-span-2 text-center">
            <Button type="submit" size={"xl"}>
              Let&apos;s talk
            </Button>
          </div>
        </div>
      </form>
    </SectionWrapper>
  );
};
