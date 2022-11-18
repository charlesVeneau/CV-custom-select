# cv-custom-select

## Description

React librairy that display a custom hybrid select

Part of the Openclassrooms Frontend dev internship.

## Personalization

The select has it's own style but can be presonnalised using classes

Just check in the console to get the class name needed.

It's composed of a select for screen readers, keyboard navigation and mobile devices.

For the custom select, you can style the option list who's display in a unordered list.

### Examples

Custom the select

```
.selectNative
 {
  position: relative;
  width: 100%;
  height: 100%;
}
```

Change option list style

```
.selectCustom-opts {
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  overflow-x: hidden;
  overflow-y: scroll;
  list-style: none;
  padding-left: 0;
}
```

Change list elements style

```
.selectCustom-opt {
  cursor: pointer;
  padding: 4px 0 4px 5px;
}
```

The select has 3 state for handeling errors represented by classes

.neutral (if no choice is made)
.isValid
.hasError

you can use it the customize the select.

## Dependencies

You find it in the package.json file

```
 "peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
```

## Props

The library needs 3 props

```
<Select data={JSON Object} handleChange={Function} name={String} />
```

data that needs to be displayed in the option list

handleChange that parent component state of the selection

name use for the label
