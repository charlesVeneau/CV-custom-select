import React from "react";
import { storiesOf } from "@storybook/react";

import { Select } from '../components/Select'

import DATA from '../DATA.json'

const stories = storiesOf('App test', module)

stories.add("App", () => {
    return (
        <Select data={DATA} name="States"/>
    )
})