class Player {
    constructor()
    {
        this.turn = true;
        this.name = '';
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