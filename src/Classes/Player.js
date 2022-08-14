class Player {
    constructor()
    {
        this.turn = true;
        this.name = '';
        this.score = 0;
    }

    setName(name)
    {
        this.name = name;
    }

    getName()
    {
        return this.name
    }
}

export default Player;