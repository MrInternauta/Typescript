function log(target, key) {
  console.log(key + 'se ha llamado');
}

class Persona4 {
  private name: string;

  constructor(name:string) {
    this.name = name;
  }

  @log
  sayMyName() {
    console.log(this.name);
  }
}

const persona4: Persona4 = new Persona4('Felipe');
persona4.sayMyName() // 'Felipe' // 'sayMyName se ha llamado'