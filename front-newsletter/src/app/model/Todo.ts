export class Todo{
  id: number;
  title: string;
  description: string;
  done: boolean;

  adresse: string;

  constructor(data: any) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.done = data.done;
    this.adresse = data.adresse;
  }


  toString() {
    return "Todo{" +
      "id=" + this.id +
      ", title='" + this.title + '\'' +
      ", description='" + this.description + '\'' +
      ", done=" + this.done +
      ", adresse='" + this.adresse + '\'' +
      '}';
  }

  serialize() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      done: this.done,
      adresse: this.adresse
    }
  }

  deserialize(data: any) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.done = data.done;
    this.adresse = data.adresse;
  }
}
