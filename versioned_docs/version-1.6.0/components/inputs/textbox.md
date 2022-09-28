---
id: textbox
title: UITextBoxView
sidebar_label: UITextBoxView
---

Represents the UITextBoxView component that allows the user to enter the values based on it’s type.
```tsx
import { UITextBoxView } from '@realmocean/inputs'

HStack(
    UITextBoxView().width('100%').placeholder(placeholder)
)

```
### Property Methods

__*.autocomplete*__(value:boolean)

Specifies whether the browser is allow to automatically enter or select a value for the textbox. By default, autocomplete is enabled for textbox.

Default **false**

__*.cssClass*__(value:string)

Specifies the CSS class value that is appended to wrapper of Textbox.

Default **''**

__*.enabled*__(value:boolean)

Specifies a Boolean value that indicates whether the TextBox allow user to interact with it.

Default __true__

__*.floatLabelType*__(value:string)

Specifies the floating label behavior of the TextBox that the placeholder text floats above the TextBox based on the below values. Possible values are:
- *Never* - The placeholder text should not be float ever.
- *Always* - The placeholder text floats above the TextBox always.
- *Auto* - The placeholder text floats above the TextBox while focusing or enter a value in Textbox.

Defaults to __Never__
