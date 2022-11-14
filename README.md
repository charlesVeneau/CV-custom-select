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
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.4.2"
  }
```

## Props

The library needs 3 props

```
<Modal isOpen={Boolean} closeModal={Function} content={Object} />
```

isOpen comes from the state

closeModal handles the close method used by the modal cross and the outside modal click event

content represent the information display in the modal


### Example

```
const content = {
        "link": "String" (Navlink Element),
        "linkText": "String",
        "modalTitle": "String",
        "modalText": "String",
        "status": "string" (success | error)
    }
```