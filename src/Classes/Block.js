
class Block {
    constructor(id)
    {
        this.id = id;
        this.isUsed = false;
        this.usedBy = 'none';
    }

    setToPlayer = () =>
    {
        this.isUsed = true;
        this.usedBy = 'player';
        document.getElementById(this.id).style.backgroundColor = 'blue';
    }

    setToOpponent = () =>
    {
        this.isUsed = true;
        this.usedBy = 'opponent';
        document.getElementById(this.id).style.backgroundColor = 'red';
    }
}

export default Block;