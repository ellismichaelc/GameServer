import baseModel from '../src/basemodel';

class player_head extends baseModel {

    constructor(scene, id, parent_model) {

        var options = {
            filename: 'shared/player_head.json',
            scale: 25
        };

        super(scene, id, options, parent_model);
    }

    init() {
        mcec.log("Player head loaded");
    }

    // this is called for every player on every render update,
    // does NOT fire until the model is loaded
    update() {

    }

}

module.exports = player_head;