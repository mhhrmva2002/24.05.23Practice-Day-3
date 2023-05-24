import { Button } from "@mui/material";
import React from "react";

const Add = () => {
  return (
    <>
      <form action="http://localhost:8080/api/colorlibs" method="POST">
        <input placeholder="Body" type="text" name="Body" />
        <input placeholder="Title" type="text" name="Title" />
        <input placeholder="Button" type="text" name="Button" />
        <input placeholder=" ImageURL " type="url" name="ImageURL" />
        <Button type="submit" variant=" ">Add new card</Button>
      </form>
    </>
  );
};

export default Add;