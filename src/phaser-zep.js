/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2013-2023 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

require('./polyfills/requestVideoFrame');

var CONST = require('./const');
var Extend = require('./utils/object/Extend');

/**
 * @namespace Phaser
 */

var Phaser = {

    Animations: require('./animations'),
    BlendModes: require('./renderer/BlendModes'),
    Cache: require('./cache'),
    Cameras: {
        Scene2D: require('./cameras/2d')
    },
    Core: require('./core'),
    Class: require('./utils/Class'),
    Display: {
        Canvas: require('./display/canvas'),
        Color: require('./display/color')
    },
    DOM: require('./dom'),
    Events: require('./events'),
    Game: require('./core/Game'),
    GameObjects: {
        Events: require('./gameobjects/events'),

        DisplayList: require('./gameobjects/DisplayList'),
        GameObjectCreator: require('./gameobjects/GameObjectCreator'),
        GameObjectFactory: require('./gameobjects/GameObjectFactory'),
        UpdateList: require('./gameobjects/UpdateList'),

        Components: require('./gameobjects/components'),

        GameObject: require('./gameobjects/GameObject'),
        Container: require('./gameobjects/container/Container'),
        DOMElement: require('./gameobjects/domelement/DOMElement'),
        Group: require('./gameobjects/group/Group'),
        Image: require('./gameobjects/image/Image'),
        Layer: require('./gameobjects/layer/Layer'),
        Sprite: require('./gameobjects/sprite/Sprite'),

        Text: require('./gameobjects/text/Text'),

        TileSprite: require('./gameobjects/tilesprite/TileSprite'),
        Zone: require('./gameobjects/zone/Zone'),

        Factories: {
            Container: require('./gameobjects/container/ContainerFactory'),
            DOMElement: require('./gameobjects/domelement/DOMElementFactory'),
            Graphics: require('./gameobjects/graphics/GraphicsFactory'),
            Group: require('./gameobjects/group/GroupFactory'),
            Image: require('./gameobjects/image/ImageFactory'),
            Layer: require('./gameobjects/layer/LayerFactory'),
            Sprite: require('./gameobjects/sprite/SpriteFactory'),
            Text: require('./gameobjects/text/TextFactory'),
            Zone: require('./gameobjects/zone/ZoneFactory')
        },
        Creators: {
            Container: require('./gameobjects/container/ContainerCreator'),
            Group: require('./gameobjects/group/GroupCreator'),
            Image: require('./gameobjects/image/ImageCreator'),
            Layer: require('./gameobjects/layer/LayerCreator'),
            Sprite: require('./gameobjects/sprite/SpriteCreator'),
            Text: require('./gameobjects/text/TextCreator')
        }
    },
    Geom: {
        Circle: require('./geom/circle'),
        Intersects: {
            RectangleToRectangle: require('./geom/intersects/RectangleToRectangle')
        },
        Rectangle: require('./geom/rectangle')
    },
    Input: require('./input'),
    Loader: Extend(false, {
        Events: require('./loader/events'),
        FileTypes: {
            AudioFile: require('./loader/filetypes/AudioFile'),
            HTML5AudioFile: require('./loader/filetypes/HTML5AudioFile'),
            ImageFile: require('./loader/filetypes/ImageFile'),
            JSONFile: require('./loader/filetypes/JSONFile'),
            PluginFile: require('./loader/filetypes/PluginFile'),
            ScenePluginFile: require('./loader/filetypes/ScenePluginFile'),
            SpriteSheetFile: require('./loader/filetypes/SpriteSheetFile'),
            SVGFile: require('./loader/filetypes/SVGFile'),
            TilemapJSONFile: require('./loader/filetypes/TilemapJSONFile')
        },
        File: require('./loader/File'),
        FileTypesManager: require('./loader/FileTypesManager'),
        GetURL: require('./loader/GetURL'),
        LoaderPlugin: require('./loader/LoaderPlugin'),
        MergeXHRSettings: require('./loader/MergeXHRSettings'),
        MultiFile: require('./loader/MultiFile'),
        XHRLoader: require('./loader/XHRLoader'),
        XHRSettings: require('./loader/XHRSettings')
    }, require('./loader/const')),
    Math: {
        Angle: {
            Between: require('./math/angle/Between')
        },
        Clamp: require('./math/Clamp'),
        DegToRad: require('./math/DegToRad'),
        Distance: {
            Between: require('./math/distance/DistanceBetween'),
            Squared: require('./math/distance/DistanceSquared')
        },
        Easing: {
            Linear: require('./math/easing/linear'),
            Quadratic: require('./math/easing/quadratic')
        },
        Snap: require('./math/snap'),
        Vector2: require('./math/Vector2')
    },
    Physics: {
        Arcade: require('./physics/arcade')
    },
    Plugins: require('./plugins'),
    Renderer: require('./renderer'),
    Scale: require('./scale'),
    ScaleModes: require('./renderer/ScaleModes'),
    Scene: require('./scene/Scene'),
    Scenes: require('./scene'),
    Structs: require('./structs'),
    Textures: require('./textures'),
    Tilemaps: require('./tilemaps'),
    Time: require('./time'),
    Tweens: require('./tweens'),
    Utils: {
        Array: {
            SpliceOne: require('./utils/array/SpliceOne')
        },
        Base64: {
            Base64ToArrayBuffer: require('./utils/base64/Base64ToArrayBuffer')
        },
        Objects: {
            GetValue: require('./utils/object/GetValue')
        }
    }
};

//  Merge in the optional plugins and WebGL only features

if (typeof FEATURE_SOUND)
{
    Phaser.Sound = require('./sound');
}

//   Merge in the consts

Phaser = Extend(false, Phaser, CONST);

/**
 * The root types namespace.
 *
 * @namespace Phaser.Types
 * @since 3.17.0
 */

//  Export it

module.exports = Phaser;

global.Phaser = Phaser;

/*
 * "Documentation is like pizza: when it is good, it is very, very good;
 * and when it is bad, it is better than nothing."
 *  -- Dick Brandon
 */
