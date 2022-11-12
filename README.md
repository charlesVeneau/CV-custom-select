# cv-custom-select


## Description
React librairy that display a custom hybrid select

Part of the Openclassrooms Frontend dev internship.

## Personalization

The select has it's own style but can be presonnalised using classes

Just check in the console to get the class name needed.

### Examples

Change modal width and padding
```
.App .modal-elt{
    width: 75%;
    padding: 1rem;
}
```

Change modal icon size
```
.App .modal-isValid {
    height: 25%;
    width: 25%;
}
```

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