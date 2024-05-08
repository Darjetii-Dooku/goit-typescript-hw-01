// type AllType = {
//     name: string;
//     position: number;
//     color: string;
//     weight: number
//   }
  
//   function compare (top, bottom): AllType {
//     return {
//       name: top.name,
//       color: top.color,
//       position: bottom.position,
//       weight: bottom.weight,
//     }
//   }



type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number
  }
  
  function compare (top: object, bottom: object): AllType | Pick< AllType, "name" | "position" | "color" | "weight"> {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    }
  }