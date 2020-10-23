/**
 * Class Person
 */
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    introduceMySelf() {
        console.log(`Hello my name is ${this.firstname} ${this.lastname}`);
    }
}
const moi = new Person("Nicolas", "Caumont")
const toi = new Person("Yves", "Dupont")
// moi.introduceMySelf();
// toi.introduceMySelf();

/**
 * Class Teacher extends Person
 * On dit que la classe teacher spécialise la classe Person
 */
class Teacher extends Person {
    constructor(firstname, lastname, subject) {
        super(firstname, lastname)
        this.subject = subject;
        console.log(this);
    }

    // Méthodes
    teach() {
        console.log(`My subject: ${this.subject}`);
    }

    // Surcharge de la méthode introduceMySelf
    introduceMySelf() {
        super.introduceMySelf();
        console.log(`... and i am a teacher`);
    }
}
const jose = new Teacher("Jamon", "José", "english")
jose.introduceMySelf();
jose.teach()


/**
 * class User
 */
class User {
    constructor(login, password) {
        this.login = login;
        this.password = password;
    }

    signIn() {
        console.log(`Vous êtes loggé avec le login ${this.login} et mot de passe ${this.password}`);
    }

    logout() {
        console.log(`Vous avez été déconnecté`);
    }
}

class superUser extends User {
    constructor(login, password, role) {
        super(login, password)
        this.role = role;
    }

    signIn() {
        super.signIn();
        console.log(`Vous êtes loggé en tant que ${this.role}`);
    }

    logout() {
        super.logout();
        console.log(`Au revoir ${this.role}`);
    }
}

const ouam = new User('logouam', 'cecinestpasunmotdepasse');
ouam.signIn()
ouam.logout()

const admin = new superUser('logouam', 'cecinestpasunmotdepasse', 'admin')
admin.signIn()
admin.logout()

console.log("#####################################");

class Player {
    constructor(name) {
        this.name = name;
    }

    dance() {
        console.log(`${this.name} danse le twerk`);
    }

    speak() {
        console.log(`${this.name} dit: blablabla...`);
    }
}

const wam = new Player("wam");
wam.dance()
wam.speak();

class Warrior extends Player {
    constructor(name, life, attack, stamina) {
        super(name);
        this.life = life;
        this.attack = attack;
        this.stamina = stamina;
    }

    dance() {
        super.dance();
        console.log(`I am a great dancer !`);
    }

    speak() {
        super.speak();
        console.log(`BLABLABLAAAAAA !!!!`);
    }

    attack() {
        console.log(`${this.name} strike another player`);
    }

    run() {
        this.stamina -= 10;
        console.log(`${this.name} run, stamina left: ${this.stamina}`);
    }

    fall() {
        this.life -= 20;
        console.log(`${this.name} fall, life left: ${this.life}`);
    }
}
const wam2 = new Warrior("wamrior", 100, 10, 200);
wam2.dance()
wam2.speak();
wam2.run();
wam2.fall();