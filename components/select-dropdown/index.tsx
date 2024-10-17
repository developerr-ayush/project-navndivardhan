"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

interface ItemListProps {
  id: number;
  name: string;
}

interface BasicSelectProps {
  itemList: ItemListProps[];
  label: string;
  error: boolean;
  value: string;
  onChange: (event: SelectChangeEvent) => void; // Pass the onChange handler from parent
  helperText?: string; // Optional helper text for error messages
}

export default function BasicSelect({
  itemList,
  label,
  error,
  value,
  onChange,
  helperText,
}: BasicSelectProps) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth error={error}>
        <InputLabel id="basic-select-label">{label}</InputLabel>
        <Select
          labelId="basic-select-label"
          id="basic-select"
          value={value}
          label={label}
          onChange={onChange} // Use the parent's onChange handler
        >
          {itemList.map((item) => (
            <MenuItem key={item.id} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
        {error && helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </Box>
  );
}
