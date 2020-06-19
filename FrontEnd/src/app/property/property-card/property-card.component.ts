import { Component } from '@angular/core';


@Component({
  selector:'app-property-card',
 // template:'<h1> water Saving</h1>'
 templateUrl: 'property-card.component.html',
//styles: ['h1 {fontcolor: red;}']
styleUrls:['property-card.component.css']
}
)
export class PropertyCardComponent{
  Property: any={
    "Id": 1,
    "Type":"House",
    "Price":2000,
    "Modeltype": "M90t",

  }

}
