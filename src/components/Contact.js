import React from "react";
import TextField from "@mui/material/TextField";
// import Rating from "@mui/material/Rating";
// import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const Contact = () => {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="c-main-container">
        <div className="c-left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59407.23428318271!2d83.93786363691234!3d21.470394354640057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a21167f047cd9b5%3A0x7660a40be684d655!2sSambalpur%2C%20Odisha!5e0!3m2!1sen!2sin!4v1655448656424!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            title="map"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="c-right">
          <h1>Add Your Contribuition</h1>
          <h4>
            <i>(& get a chance to be published)</i>
          </h4>
          <form action="/" className="form">
            <TextField
              id="outlined-basic name"
              label="Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic name"
              label="Email"
              variant="outlined"
            />
            <TextField
              id="outlined-basic name"
              label="  Show's Name"
              variant="outlined"
            />
            <TextField
              id="outlined-textarea"
              label="Add your Review"
              placeholder="Add Review"
              multiline
            />
            {/* <p>Rating</p> */}
            {/* <div className="rate">
              <Stack spacing={1} id="rating">
                <Rating name="half-rating" defaultValue={2.5} precision={1} />
              </Stack>
            </div> */}
            <div className="gender">
              <p>Gender</p>
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
              >
                <ToggleButton value="Male">Male</ToggleButton>
                <ToggleButton value="Female">Female</ToggleButton>
                <ToggleButton value="Other">Other</ToggleButton>
              </ToggleButtonGroup>
            </div>
            <button className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
