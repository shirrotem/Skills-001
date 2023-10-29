export class Pokemon{
     
     name: string;
     id: number;
     img: string;
     height: number;
     weight: number;
     experience: number;
     types: string[];

     constructor (name: string, id: number, img: string, height: number, weight: number, experience: number, types: string[]){
          this.name= name;
          this.id= id;
          this.img= img;
          this.height= height;
          this.weight= weight;
          this.experience= experience;
          this.types= types;

     }

}