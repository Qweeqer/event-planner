import React, { useState, useRef, forwardRef } from "react";
import { Wrapper, Label, Input, Button } from "../EventForm.styled";
import FormError from "../FormError/FormError";
import useResponsiveBreakpoints from "../../../hooks/useResponsiveBreakpoints";

const PictureSection = forwardRef((props, ref) => {
  const [selectedPicture, setSelectedPicture] = useState(null);
  const fileInputRef = useRef(null);
  const { isTabletMax } = useResponsiveBreakpoints();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedPicture(file);
  };

  const selectButtonStyles = {
    position: isTabletMax ? "relative" : "static",
    marginTop: isTabletMax ? "15%" : "8%",
    marginLeft: isTabletMax ? "8%" : 0,
    backgroundColor: "grey",// only if backend not suport add files
  };

  const handleSelectButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Wrapper>
      <Label htmlFor="picture">Add picture</Label>
      <Input type="text" id="address" name="address" />
      <input
        type="file"
        id="picture"
        name="picture"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      {selectedPicture && (
        <img
          src={URL.createObjectURL(selectedPicture)}
          alt="Selected"
          style={{ maxWidth: "100%", marginTop: "10px" }}
        />
      )}
      <FormError name="picture" />
      <Button
        type="button"
        onClick={handleSelectButtonClick}
        style={selectButtonStyles}
        disabled // only if backend not suport add files
      >
        Choose File
      </Button>
    </Wrapper>
  );
});

export default PictureSection;
