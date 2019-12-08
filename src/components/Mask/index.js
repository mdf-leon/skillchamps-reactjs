// import React from "react"
// import { Input } from "reactstrap"

// import "./style.css"

// export default class InputMask extends React.Component {
//   handleChange = e => {
//     const { value } = e.currentTarget
//     const { onChange } = this.props
//     const cleanValue = value.replace(/[^\d]/g, "")

//     onChange(cleanValue)
//   }

//   static format(value, mask) {
//     let i = 0
//     let replacedIndex = -1
//     const filledMask = mask.toString().replace(/#/g, (_, j) => {
//       if (i >= value.length) {
//         return "#"
//       }
//       replacedIndex = j
//       return value[i++]
//     })
//     return filledMask.substring(0, replacedIndex + 1)
//   }

//   render() {
//     const { value, mask, onChange, ...props } = this.props
//     return (
//       <Input
//         value={InputMask.format(value, mask)}
//         onChange={this.handleChange}
//         className="input"
//         {...props}
//       />
//     )
//   }
// }
