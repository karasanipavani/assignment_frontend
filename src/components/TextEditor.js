import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import { saveLetter } from "../services/api";

const TextEditor = ({ userId }) => {
  const [content, setContent] = useState("");

  const handleSave = async () => {
    try {
      await saveLetter(userId, content);
      alert("Letter saved successfully!");
    } catch (error) {
      console.error("Error saving letter:", error);
    }
  };

  return (
    <Container>
      <TextField
        label="Write your letter..."
        multiline
        rows={8}
        fullWidth
        variant="outlined"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSave} style={{ marginTop: "10px" }}>
        Save to Google Drive
      </Button>
    </Container>
  );
};

export default TextEditor;
