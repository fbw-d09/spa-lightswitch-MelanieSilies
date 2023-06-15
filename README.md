# lightSwitch
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


## 1. Room component
- Create a 'Room' component in `/src/Room.js`
- The root `div` of the component should have `className` attribute with value 'lit'
- Add a paragraph that reads 'The room is lit' 
- Add a "lightswitch" button
- Clicking the button should toggle the light on and off:
  - The text should change to 'The room is dark'
  - The class of the `div` should change to 'dark'
- Use the `useState` hook to store the lightswitch state. By default the room should be lit .

You can use the following CSS

```css
html,
body,
#root,
.room {
  height: 100vh;
  margin: 0;
  text-align: center;
  font-family: "Georgia", serif;
  font-size: 1.5rem;
}

button {
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
}

.room {
  padding: 30px;
}

.lit {
  background-color: white;
  color: black;
}

.dark {
  background-color: black;
  color: white;
}

```

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### Room Component

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `Room` component is defined in `src/Room.js` |

### Button

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | Lightswitch Button exists |

### Default

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | Initially the root `div` has the class `lit` and doesn't have the class `dark` |

### Off

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | After button is clicked the root `div` has the class `dark` and doesn't have the class `lit` |

### On

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | After button is clicked a secind tiime the root `div` has the class `lit` and doesn't have the class `dark` |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=SPA-lightSwitch)


[//]: # (autograding info end)