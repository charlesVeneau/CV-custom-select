import React, {useState} from "react";
import { storiesOf } from "@storybook/react";

import { Select } from '../components/Select'

import DATA from '../DATA.json'

const stories = storiesOf('App test', module)

stories.add("App", () => {
      const userMockup = {
    id: 1,
    firstName: null,
    lastName: null,
    dateofBirth: null,
    street: null,
    city: null,
    stateAbbrev: null,
    zipCode: null,
    startDate: null,
    department: null,
  };
  const [userInfo, setUserInfo] = useState(userMockup);

    function handleChange(event, name) {
    setUserInfo({ ...userInfo, [name]: event });
  }

    return (
        <Select data={DATA} name="States" handleChange={handleChange}/>
    )
})