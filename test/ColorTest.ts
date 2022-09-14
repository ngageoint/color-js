import { Color } from '../dist/Color';
import { ColorConstants } from '../dist/ColorConstants';
import { ColorUtils } from '../dist/ColorUtils';
import { expect } from 'chai';

describe('Color Tests', function () {

        it('test color creation', function () {
                const color = new Color();

                // Default color, opaque black
                validateColor(color, 0, "#000000", "#000", 0, 0, 0, 0.0, 0.0, 0.0);

                color.setRed(64);
                validateColor(color, 0x400000, "#400000", "#400000", 64, 0, 0, 0.0,
                        1.0, 0.13);
                color.setRed(128 / 255.0);
                validateColor(color, 0x800000, "#800000", "#800000", 128, 0, 0, 0.0,
                        1.0, 0.25);
                color.setRed("C0");
                validateColor(color, 0xC00000, "#C00000", "#C00000", 192, 0, 0, 0.0,
                        1.0, 0.38);
                color.setRed(0xFF);
                validateColor(color, 0xFF0000, "#FF0000", "#F00", 255, 0, 0, 0.0, 1.0,
                        0.5);
                expect(color.isOpaque()).to.be.true;

                color.setGreen(64);
                validateColor(color, 0xFF4000, "#FF4000", "#FF4000", 255, 64, 0, 15.1,
                        1.0, 0.5);
                color.setGreen(128 / 255.0);
                validateColor(color, 0xFF8000, "#FF8000", "#FF8000", 255, 128, 0, 30.1,
                        1.0, 0.5);
                color.setGreen("c0");
                validateColor(color, 0xFFC000, "#FFC000", "#FFC000", 255, 192, 0, 45.2,
                        1.0, 0.5);
                color.setGreen(0xFF);
                validateColor(color, 0xFFFF00, "#FFFF00", "#FF0", 255, 255, 0, 60.0,
                        1.0, 0.5);
                expect(color.isOpaque()).to.be.true;

                color.setBlue(64);
                validateColor(color, 0xFFFF40, "#FFFF40", "#FFFF40", 255, 255, 64,
                        60.0, 1.0, 0.63);
                color.setBlue(128 / 255.0);
                validateColor(color, 0xFFFF80, "#FFFF80", "#FFFF80", 255, 255, 128,
                        60.0, 1.0, 0.75);
                color.setBlue("C0");
                validateColor(color, 0xFFFFC0, "#FFFFC0", "#FFFFC0", 255, 255, 192,
                        60.0, 1.0, 0.88);
                color.setBlue(0xFF);
                validateColor(color, 0xFFFFFF, "#FFFFFF", "#FFF", 255, 255, 255, 0.0,
                        0.0, 1.0);
                expect(color.isOpaque()).to.be.true;

                color.setAlpha(64);
                validateColor2(color, 0xFFFFFF, 0x40FFFFFF, "#FFFFFF", "#FFF",
                        "#40FFFFFF", "#40FFFFFF", 255, 255, 255, 64, 0.0, 0.0, 1.0);
                expect(color.isOpaque()).to.be.false;
                color.setOpacity(0.5);
                //TODO figure out opacity
                /*validateColor3(color, 0xFFFFFF, 0x80FFFFFF, "#FFFFFF", "#FFF",
                        "#80FFFFFF", "#80FFFFFF", 255, 255, 255, 128, 0.5, 0.0, 0.0,
                        1.0);
                expect(color.isOpaque()).to.be.false;
                color.setAlpha("C0");
                validateColor2(color, 0xFFFFFF, 0xC0FFFFFF, "#FFFFFF", "#FFF",
                        "#C0FFFFFF", "#C0FFFFFF", 255, 255, 255, 192, 0.0, 0.0, 1.0);
                expect(color.isOpaque()).to.be.false;
                color.setAlpha(0xFF);
                validateColor2(color, 0xFFFFFF, 0xFFFFFFFF, "#FFFFFF", "#FFF",
                        "#FFFFFFFF", "#FFFF", 255, 255, 255, 255, 0.0, 0.0, 1.0);
                expect(color.isOpaque()).to.be.true;*/

        });

        it('test color hex constants', function () {

                let color = new Color();
                color.setColor(ColorConstants.BLACK);
                validateColor(color, 0, "#000000", "#000", 0,
                        0, 0, 0.0, 0.0, 0.0);
                color = new Color();
                color.setColor(ColorConstants.BLUE);
                validateColor(color, 255, "#0000FF", "#00F", 0,
                        0, 255, 240.0, 1.0, 0.5);
                color = new Color();
                color.setColor(ColorConstants.BROWN);
                validateColor(color, 10824234, "#A52A2A",
                        "#A52A2A", 165, 42, 42, 0.0, 0.59, 0.41);
                color = new Color();
                color.setColor(ColorConstants.CYAN);
                validateColor(color, 65535, "#00FFFF", "#0FF",
                        0, 255, 255, 180.0, 1.0, 0.5);
                color = new Color();
                color.setColor(ColorConstants.DKGRAY);
                validateColor(color, 4473924, "#444444",
                        "#444", 68, 68, 68, 0.0, 0.0, 0.27);
                color = new Color();
                color.setColor(ColorConstants.GRAY);
                validateColor(color, 8947848, "#888888",
                        "#888", 136, 136, 136, 0.0, 0.0, 0.53);
                color = new Color();
                color.setColor(ColorConstants.GREEN);
                validateColor(color, 65280, "#00FF00", "#0F0",
                        0, 255, 0, 120.0, 1.0, 0.5);
                color = new Color();
                color.setColor(ColorConstants.LTGRAY);
                validateColor(color, 13421772, "#CCCCCC",
                        "#CCC", 204, 204, 204, 0.0, 0.0, 0.8);
                color = new Color();
                color.setColor(ColorConstants.MAGENTA);
                validateColor(color, 16711935, "#FF00FF",
                        "#F0F", 255, 0, 255, 300.0, 1.0, 0.5);
                color = new Color();
                color.setColor(ColorConstants.ORANGE);
                validateColor(color, 16753920, "#FFA500",
                        "#FFA500", 255, 165, 0, 39.0, 1.0, 0.5);
                color = new Color();
                color.setColor(ColorConstants.PINK);
                validateColor(color, 16761035, "#FFC0CB",
                        "#FFC0CB", 255, 192, 203, 350.0, 1.0, 0.88);
                color = new Color();
                color.setColor(ColorConstants.PURPLE);
                validateColor(color, 8388736, "#800080",
                        "#800080", 128, 0, 128, 300.0, 1.0, 0.25);
                color = new Color();
                color.setColor(ColorConstants.RED);
                validateColor(color, 16711680, "#FF0000",
                        "#F00", 255, 0, 0, 0.0, 1.0, 0.5);
                color = new Color();
                color.setColor(ColorConstants.VIOLET);
                validateColor(color, 15631086, "#EE82EE",
                        "#EE82EE", 238, 130, 238, 300.0, 0.76, 0.72);
                color = new Color();
                color.setColor(ColorConstants.WHITE);
                validateColor(color, 16777215, "#FFFFFF",
                        "#FFF", 255, 255, 255, 0.0, 0.0, 1.0);
                color = new Color();
                color.setColor(ColorConstants.YELLOW);
                validateColor(color, 16776960, "#FFFF00",
                        "#FF0", 255, 255, 0, 60.0, 1.0, 0.5);

                //TODO figure out opacity and min integer
                /*color = new Color();
                color.setColor(ColorConstants.BLACK);
                color.setOpacity(0.5);
                validateColor3(color, 0,
                        Number.MIN_SAFE_INTEGER, "#000000", "#000", "#80000000", "#80000000",
                        0, 0, 0, 128, 0.5, 0.0, 0.0, 0.0);
                color = new Color();
                color.setColor(ColorConstants.ORANGE);
                color.setOpacity(0.25);
                validateColor3(color, 16753920,
                        1090495744, "#FFA500", "#FFA500", "#40FFA500", "#40FFA500", 255,
                        165, 0, 64, 0.25, 39.0, 1.0, 0.5);
                color = new Color();
                color.setColor(ColorConstants.YELLOW);
                color.setOpacity(0.85);
                validateColor3(color, 16776960,
                        -637534464, "#FFFF00", "#FF0", "#D9FFFF00", "#D9FFFF00", 255,
                        255, 0, 217, 0.85, 60.0, 1.0, 0.5);

                color = new Color();
                color.setColor("#80000000");
                validateColor2(color, 0, Number.MIN_SAFE_INTEGER, "#000000",
                        "#000", "#80000000", "#80000000", 0, 0, 0, 128, 0.0, 0.0,
                        0.0);*/
                color = new Color();
                color.setColor("#40FFA500");
                validateColor2(color, 16753920, 1090495744, "#FFA500",
                        "#FFA500", "#40FFA500", "#40FFA500", 255, 165, 0, 64, 39.0,
                        1.0, 0.5);
                color = new Color();
                color.setColor("#D9FFFF00");
                validateColor2(color, 16776960, -637534464, "#FFFF00",
                        "#FF0", "#D9FFFF00", "#D9FFFF00", 255, 255, 0, 217, 60.0, 1.0,
                        0.5);
        });

        it('test color integers', function () {
                expect.fail('Not implemented');
                /* validateColor(new Color(0), 0, "#000000", "#000", 0, 0, 0, 0.0f, 0.0f,
                         0.0f);
                 validateColor(new Color(255), 255, "#0000FF", "#00F", 0, 0, 255, 240.0f,
                         1.0f, 0.5f);
                 validateColor(new Color(10824234), 10824234, "#A52A2A", "#A52A2A", 165,
                         42, 42, 0.0f, 0.59f, 0.41f);
                 validateColor(new Color(65535), 65535, "#00FFFF", "#0FF", 0, 255, 255,
                         180.0f, 1.0f, 0.5f);
                 validateColor(new Color(4473924), 4473924, "#444444", "#444", 68, 68,
                         68, 0.0f, 0.0f, 0.27f);
                 validateColor(new Color(8947848), 8947848, "#888888", "#888", 136, 136,
                         136, 0.0f, 0.0f, 0.53f);
                 validateColor(new Color(65280), 65280, "#00FF00", "#0F0", 0, 255, 0,
                         120.0f, 1.0f, 0.5f);
                 validateColor(new Color(13421772), 13421772, "#CCCCCC", "#CCC", 204,
                         204, 204, 0.0f, 0.0f, 0.8f);
                 validateColor(new Color(16711935), 16711935, "#FF00FF", "#F0F", 255, 0,
                         255, 300.0f, 1.0f, 0.5f);
                 validateColor(new Color(16753920), 16753920, "#FFA500", "#FFA500", 255,
                         165, 0, 39.0f, 1.0f, 0.5f);
                 validateColor(new Color(16761035), 16761035, "#FFC0CB", "#FFC0CB", 255,
                         192, 203, 350.0f, 1.0f, 0.88f);
                 validateColor(new Color(8388736), 8388736, "#800080", "#800080", 128, 0,
                         128, 300.0f, 1.0f, 0.25f);
                 validateColor(new Color(16711680), 16711680, "#FF0000", "#F00", 255, 0,
                         0, 0.0f, 1.0f, 0.5f);
                 validateColor(new Color(15631086), 15631086, "#EE82EE", "#EE82EE", 238,
                         130, 238, 300.0f, 0.76f, 0.72f);
                 validateColor(new Color(16777215), 16777215, "#FFFFFF", "#FFF", 255,
                         255, 255, 0.0f, 0.0f, 1.0f);
                 validateColor(new Color(16776960), 16776960, "#FFFF00", "#FF0", 255,
                         255, 0, 60.0f, 1.0f, 0.5f);*/
        });

        it('test color alpha integers', function () {
                expect.fail('Not implemented');
                /*validateColor(new Color(-16777216), 0, "#000000", "#000", 0, 0, 0, 0.0f,
                        0.0f, 0.0f);
                validateColor(new Color(-16776961), 255, "#0000FF", "#00F", 0, 0, 255,
                        240.0f, 1.0f, 0.5f);
                validateColor(new Color(-5952982), 10824234, "#A52A2A", "#A52A2A", 165,
                        42, 42, 0.0f, 0.59f, 0.41f);
                validateColor(new Color(-16711681), 65535, "#00FFFF", "#0FF", 0, 255,
                        255, 180.0f, 1.0f, 0.5f);
                validateColor(new Color(-12303292), 4473924, "#444444", "#444", 68, 68,
                        68, 0.0f, 0.0f, 0.27f);
                validateColor(new Color(-7829368), 8947848, "#888888", "#888", 136, 136,
                        136, 0.0f, 0.0f, 0.53f);
                validateColor(new Color(-16711936), 65280, "#00FF00", "#0F0", 0, 255, 0,
                        120.0f, 1.0f, 0.5f);
                validateColor(new Color(-3355444), 13421772, "#CCCCCC", "#CCC", 204,
                        204, 204, 0.0f, 0.0f, 0.8f);
                validateColor(new Color(-65281), 16711935, "#FF00FF", "#F0F", 255, 0,
                        255, 300.0f, 1.0f, 0.5f);
                validateColor(new Color(-23296), 16753920, "#FFA500", "#FFA500", 255,
                        165, 0, 39.0f, 1.0f, 0.5f);
                validateColor(new Color(-16181), 16761035, "#FFC0CB", "#FFC0CB", 255,
                        192, 203, 350.0f, 1.0f, 0.88f);
                validateColor(new Color(-8388480), 8388736, "#800080", "#800080", 128,
                        0, 128, 300.0f, 1.0f, 0.25f);
                validateColor(new Color(-65536), 16711680, "#FF0000", "#F00", 255, 0, 0,
                        0.0f, 1.0f, 0.5f);
                validateColor(new Color(-1146130), 15631086, "#EE82EE", "#EE82EE", 238,
                        130, 238, 300.0f, 0.76f, 0.72f);
                validateColor(new Color(-1), 16777215, "#FFFFFF", "#FFF", 255, 255, 255,
                        0.0f, 0.0f, 1.0f);
                validateColor(new Color(-256), 16776960, "#FFFF00", "#FF0", 255, 255, 0,
                        60.0f, 1.0f, 0.5f);
        
                validateColor(new Color(16777216), 0, 16777216, "#000000", "#000",
                        "#01000000", "#01000000", 0, 0, 0, 1, 0.00392156862f, 0.0f,
                        0.0f, 0.0f);
                validateColor(new Color(Integer.MAX_VALUE), 16777215, 2147483647,
                        "#FFFFFF", "#FFF", "#7FFFFFFF", "#7FFFFFFF", 255, 255, 255, 127,
                        0.0f, 0.0f, 1.0f);
                validateColor(new Color(Integer.MIN_VALUE), 0, Integer.MIN_VALUE,
                        "#000000", "#000", "#80000000", "#80000000", 0, 0, 0, 128, 0.0f,
                        0.0f, 0.0f);
                validateColor(new Color(-1), 16777215, -1, "#FFFFFF", "#FFF",
                        "#FFFFFFFF", "#FFFF", 255, 255, 255, 255, 1.0f, 0.0f, 0.0f,
                        1.0f);*/

        });

        it('test color hex integers', function () {
                expect.fail('Not implemented');
                /*validateColor(new Color(0x000000), 0, "#000000", "#000", 0, 0, 0, 0.0f,
                        0.0f, 0.0f);
                validateColor(new Color(0x0000FF), 255, "#0000FF", "#00F", 0, 0, 255,
                        240.0f, 1.0f, 0.5f);
                validateColor(new Color(0xA52A2A), 10824234, "#A52A2A", "#A52A2A", 165,
                        42, 42, 0.0f, 0.59f, 0.41f);
                validateColor(new Color(0x00FFFF), 65535, "#00FFFF", "#0FF", 0, 255,
                        255, 180.0f, 1.0f, 0.5f);
                validateColor(new Color(0x444444), 4473924, "#444444", "#444", 68, 68,
                        68, 0.0f, 0.0f, 0.27f);
                validateColor(new Color(0x888888), 8947848, "#888888", "#888", 136, 136,
                        136, 0.0f, 0.0f, 0.53f);
                validateColor(new Color(0x00FF00), 65280, "#00FF00", "#0F0", 0, 255, 0,
                        120.0f, 1.0f, 0.5f);
                validateColor(new Color(0xCCCCCC), 13421772, "#CCCCCC", "#CCC", 204,
                        204, 204, 0.0f, 0.0f, 0.8f);
                validateColor(new Color(0xFF00FF), 16711935, "#FF00FF", "#F0F", 255, 0,
                        255, 300.0f, 1.0f, 0.5f);
                validateColor(new Color(0xFFA500), 16753920, "#FFA500", "#FFA500", 255,
                        165, 0, 39.0f, 1.0f, 0.5f);
                validateColor(new Color(0xFFC0CB), 16761035, "#FFC0CB", "#FFC0CB", 255,
                        192, 203, 350.0f, 1.0f, 0.88f);
                validateColor(new Color(0x800080), 8388736, "#800080", "#800080", 128,
                        0, 128, 300.0f, 1.0f, 0.25f);
                validateColor(new Color(0xFF0000), 16711680, "#FF0000", "#F00", 255, 0,
                        0, 0.0f, 1.0f, 0.5f);
                validateColor(new Color(0xEE82EE), 15631086, "#EE82EE", "#EE82EE", 238,
                        130, 238, 300.0f, 0.76f, 0.72f);
                validateColor(new Color(0xFFFFFF), 16777215, "#FFFFFF", "#FFF", 255,
                        255, 255, 0.0f, 0.0f, 1.0f);
                validateColor(new Color(0xFFFF00), 16776960, "#FFFF00", "#FF0", 255,
                        255, 0, 60.0f, 1.0f, 0.5f);
        
                validateColor(new Color(0x80000000), 0, Integer.MIN_VALUE, "#000000",
                        "#000", "#80000000", "#80000000", 0, 0, 0, 128, 0.0f, 0.0f,
                        0.0f);
                validateColor(new Color(0x40FFA500), 16753920, 1090495744, "#FFA500",
                        "#FFA500", "#40FFA500", "#40FFA500", 255, 165, 0, 64, 39.0f,
                        1.0f, 0.5f);
                validateColor(new Color(0xD9FFFF00), 16776960, -637534464, "#FFFF00",
                        "#FF0", "#D9FFFF00", "#D9FFFF00", 255, 255, 0, 217, 60.0f, 1.0f,
                        0.5f);
        
                validateColor(new Color(0x80000000), 0, Integer.MIN_VALUE, "#000000",
                        "#000", "#80000000", "#80000000", 0, 0, 0, 128, 0.0f, 0.0f,
                        0.0f);
                validateColor(new Color(0x40FFA500), 16753920, 1090495744, "#FFA500",
                        "#FFA500", "#40FFA500", "#40FFA500", 255, 165, 0, 64, 39.0f,
                        1.0f, 0.5f);
                validateColor(new Color(0xD9FFFF00), 16776960, -637534464, "#FFFF00",
                        "#FF0", "#D9FFFF00", "#D9FFFF00", 255, 255, 0, 217, 60.0f, 1.0f,
                        0.5f);*/

        });

        it('test color RGB', function () {
                expect.fail('Not implemented');
                /*validateColor(new Color(0, 0, 0), 0, "#000000", "#000", 0, 0, 0, 0.0f,
                        0.0f, 0.0f);
                validateColor(new Color(0, 0, 255), 255, "#0000FF", "#00F", 0, 0, 255,
                        240.0f, 1.0f, 0.5f);
                validateColor(new Color(165, 42, 42), 10824234, "#A52A2A", "#A52A2A",
                        165, 42, 42, 0.0f, 0.59f, 0.41f);
                validateColor(new Color(0, 255, 255), 65535, "#00FFFF", "#0FF", 0, 255,
                        255, 180.0f, 1.0f, 0.5f);
                validateColor(new Color(68, 68, 68), 4473924, "#444444", "#444", 68, 68,
                        68, 0.0f, 0.0f, 0.27f);
                validateColor(new Color(136, 136, 136), 8947848, "#888888", "#888", 136,
                        136, 136, 0.0f, 0.0f, 0.53f);
                validateColor(new Color(0, 255, 0), 65280, "#00FF00", "#0F0", 0, 255, 0,
                        120.0f, 1.0f, 0.5f);
                validateColor(new Color(204, 204, 204), 13421772, "#CCCCCC", "#CCC",
                        204, 204, 204, 0.0f, 0.0f, 0.8f);
                validateColor(new Color(255, 0, 255), 16711935, "#FF00FF", "#F0F", 255,
                        0, 255, 300.0f, 1.0f, 0.5f);
                validateColor(new Color(255, 165, 0), 16753920, "#FFA500", "#FFA500",
                        255, 165, 0, 39.0f, 1.0f, 0.5f);
                validateColor(new Color(255, 192, 203), 16761035, "#FFC0CB", "#FFC0CB",
                        255, 192, 203, 350.0f, 1.0f, 0.88f);
                validateColor(new Color(128, 0, 128), 8388736, "#800080", "#800080",
                        128, 0, 128, 300.0f, 1.0f, 0.25f);
                validateColor(new Color(255, 0, 0), 16711680, "#FF0000", "#F00", 255, 0,
                        0, 0.0f, 1.0f, 0.5f);
                validateColor(new Color(238, 130, 238), 15631086, "#EE82EE", "#EE82EE",
                        238, 130, 238, 300.0f, 0.76f, 0.72f);
                validateColor(new Color(255, 255, 255), 16777215, "#FFFFFF", "#FFF",
                        255, 255, 255, 0.0f, 0.0f, 1.0f);
                validateColor(new Color(255, 255, 0), 16776960, "#FFFF00", "#FF0", 255,
                        255, 0, 60.0f, 1.0f, 0.5f);
        
                validateColor(new Color(0, 0, 0, 128), 0, Integer.MIN_VALUE, "#000000",
                        "#000", "#80000000", "#80000000", 0, 0, 0, 128, 0.0f, 0.0f,
                        0.0f);
                validateColor(new Color(255, 165, 0, 64), 16753920, 1090495744,
                        "#FFA500", "#FFA500", "#40FFA500", "#40FFA500", 255, 165, 0, 64,
                        39.0f, 1.0f, 0.5f);
                validateColor(new Color(255, 255, 0, 217), 16776960, -637534464,
                        "#FFFF00", "#FF0", "#D9FFFF00", "#D9FFFF00", 255, 255, 0, 217,
                        60.0f, 1.0f, 0.5f);
        
                validateColor(new Color(0, 0, 0, 0.5f), 0, Integer.MIN_VALUE, "#000000",
                        "#000", "#80000000", "#80000000", 0, 0, 0, 128, 0.5f, 0.0f,
                        0.0f, 0.0f);
                validateColor(new Color(255, 165, 0, 0.25f), 16753920, 1090495744,
                        "#FFA500", "#FFA500", "#40FFA500", "#40FFA500", 255, 165, 0, 64,
                        0.25f, 39.0f, 1.0f, 0.5f);
                validateColor(new Color(255, 255, 0, 0.85f), 16776960, -637534464,
                        "#FFFF00", "#FF0", "#D9FFFF00", "#D9FFFF00", 255, 255, 0, 217,
                        0.85f, 60.0f, 1.0f, 0.5f);*/
        });

        it('test color arithmetic', function () {
                expect.fail('Not implemented');
                /*validateColor(new Color(0.0f, 0.0f, 0.0f), 0, "#000000", "#000", 0, 0,
                        0, 0.0f, 0.0f, 0.0f);
                validateColor(new Color(0.0f, 0.0f, 1.0f), 255, "#0000FF", "#00F", 0, 0,
                        255, 240.0f, 1.0f, 0.5f);
                validateColor(new Color(0.64705882352f, 0.16470588235f, 0.16470588235f),
                        10824234, "#A52A2A", "#A52A2A", 165, 42, 42, 0.0f, 0.59f,
                        0.41f);
                validateColor(new Color(0.0f, 1.0f, 1.0f), 65535, "#00FFFF", "#0FF", 0,
                        255, 255, 180.0f, 1.0f, 0.5f);
                validateColor(new Color(0.26666666666f, 0.26666666666f, 0.26666666666f),
                        4473924, "#444444", "#444", 68, 68, 68, 0.0f, 0.0f, 0.27f);
                validateColor(new Color(0.53333333333f, 0.53333333333f, 0.53333333333f),
                        8947848, "#888888", "#888", 136, 136, 136, 0.0f, 0.0f, 0.53f);
                validateColor(new Color(0.0f, 1.0f, 0.0f), 65280, "#00FF00", "#0F0", 0,
                        255, 0, 120.0f, 1.0f, 0.5f);
                validateColor(new Color(0.8f, 0.8f, 0.8f), 13421772, "#CCCCCC", "#CCC",
                        204, 204, 204, 0.0f, 0.0f, 0.8f);
                validateColor(new Color(1.0f, 0.0f, 1.0f), 16711935, "#FF00FF", "#F0F",
                        255, 0, 255, 300.0f, 1.0f, 0.5f);
                validateColor(new Color(1.0f, 0.64705882352f, 0.0f), 16753920,
                        "#FFA500", "#FFA500", 255, 165, 0, 39.0f, 1.0f, 0.5f);
                validateColor(new Color(1.0f, 0.75294117647f, 0.79607843137f), 16761035,
                        "#FFC0CB", "#FFC0CB", 255, 192, 203, 350.0f, 1.0f, 0.88f);
                validateColor(new Color(0.50196078431f, 0.0f, 0.50196078431f), 8388736,
                        "#800080", "#800080", 128, 0, 128, 300.0f, 1.0f, 0.25f);
                validateColor(new Color(1.0f, 0.0f, 0.0f), 16711680, "#FF0000", "#F00",
                        255, 0, 0, 0.0f, 1.0f, 0.5f);
                validateColor(new Color(0.93333333333f, 0.50980392156f, 0.93333333333f),
                        15631086, "#EE82EE", "#EE82EE", 238, 130, 238, 300.0f, 0.76f,
                        0.72f);
                validateColor(new Color(1.0f, 1.0f, 1.0f), 16777215, "#FFFFFF", "#FFF",
                        255, 255, 255, 0.0f, 0.0f, 1.0f);
                validateColor(new Color(1.0f, 1.0f, 0.0f), 16776960, "#FFFF00", "#FF0",
                        255, 255, 0, 60.0f, 1.0f, 0.5f);
        
                validateColor(new Color(0.0f, 0.0f, 0.0f, 0.50196078431f), 0,
                        Integer.MIN_VALUE, "#000000", "#000", "#80000000", "#80000000",
                        0, 0, 0, 128, 0.0f, 0.0f, 0.0f);
                validateColor(new Color(1.0f, 0.64705882352f, 0.0f, 0.25098039215f),
                        16753920, 1090495744, "#FFA500", "#FFA500", "#40FFA500",
                        "#40FFA500", 255, 165, 0, 64, 39.0f, 1.0f, 0.5f);
                validateColor(new Color(1.0f, 1.0f, 0.0f, 0.85098039215f), 16776960,
                        -637534464, "#FFFF00", "#FF0", "#D9FFFF00", "#D9FFFF00", 255,
                        255, 0, 217, 60.0f, 1.0f, 0.5f);*/
        });

        it('test color hex singles', function () {
                expect.fail('Not implemented');
                /*validateColor(new Color("00", "00", "00"), 0, "#000000", "#000", 0, 0,
                        0, 0.0f, 0.0f, 0.0f);
                validateColor(new Color("00", "00", "FF"), 255, "#0000FF", "#00F", 0, 0,
                        255, 240.0f, 1.0f, 0.5f);
                validateColor(new Color("a5", "2a", "2a"), 10824234, "#A52A2A",
                        "#A52A2A", 165, 42, 42, 0.0f, 0.59f, 0.41f);
                validateColor(new Color("00", "FF", "ff"), 65535, "#00FFFF", "#0FF", 0,
                        255, 255, 180.0f, 1.0f, 0.5f);
                validateColor(new Color("44", "4", "44"), 4473924, "#444444", "#444",
                        68, 68, 68, 0.0f, 0.0f, 0.27f);
                validateColor(new Color("8", "88", "8"), 8947848, "#888888", "#888",
                        136, 136, 136, 0.0f, 0.0f, 0.53f);
                validateColor(new Color("00", "ff", "00"), 65280, "#00FF00", "#0F0", 0,
                        255, 0, 120.0f, 1.0f, 0.5f);
                validateColor(new Color("c", "C", "c"), 13421772, "#CCCCCC", "#CCC",
                        204, 204, 204, 0.0f, 0.0f, 0.8f);
                validateColor(new Color("fF", "00", "Ff"), 16711935, "#FF00FF", "#F0F",
                        255, 0, 255, 300.0f, 1.0f, 0.5f);
                validateColor(new Color("F", "A5", "0"), 16753920, "#FFA500", "#FFA500",
                        255, 165, 0, 39.0f, 1.0f, 0.5f);
                validateColor(new Color("FF", "C0", "CB"), 16761035, "#FFC0CB",
                        "#FFC0CB", 255, 192, 203, 350.0f, 1.0f, 0.88f);
                validateColor(new Color("80", "00", "80"), 8388736, "#800080",
                        "#800080", 128, 0, 128, 300.0f, 1.0f, 0.25f);
                validateColor(new Color("ff", "00", "00"), 16711680, "#FF0000", "#F00",
                        255, 0, 0, 0.0f, 1.0f, 0.5f);
                validateColor(new Color("ee", "82", "ee"), 15631086, "#EE82EE",
                        "#EE82EE", 238, 130, 238, 300.0f, 0.76f, 0.72f);
                validateColor(new Color("FF", "FF", "FF"), 16777215, "#FFFFFF", "#FFF",
                        255, 255, 255, 0.0f, 0.0f, 1.0f);
                validateColor(new Color("f", "f", "0"), 16776960, "#FFFF00", "#FF0",
                        255, 255, 0, 60.0f, 1.0f, 0.5f);
        
                validateColor(new Color("00", "00", "00", "80"), 0, Integer.MIN_VALUE,
                        "#000000", "#000", "#80000000", "#80000000", 0, 0, 0, 128, 0.0f,
                        0.0f, 0.0f);
                validateColor(new Color("f", "A5", "0", "40"), 16753920, 1090495744,
                        "#FFA500", "#FFA500", "#40FFA500", "#40FFA500", 255, 165, 0, 64,
                        39.0f, 1.0f, 0.5f);
                validateColor(new Color("ff", "F", "00", "D9"), 16776960, -637534464,
                        "#FFFF00", "#FF0", "#D9FFFF00", "#D9FFFF00", 255, 255, 0, 217,
                        60.0f, 1.0f, 0.5f);
        
                validateColor(new Color("00", "00", "00", 0.5f), 0, Integer.MIN_VALUE,
                        "#000000", "#000", "#80000000", "#80000000", 0, 0, 0, 128, 0.5f,
                        0.0f, 0.0f, 0.0f);
                validateColor(new Color("ff", "a5", "00", 0.25f), 16753920, 1090495744,
                        "#FFA500", "#FFA500", "#40FFA500", "#40FFA500", 255, 165, 0, 64,
                        0.25f, 39.0f, 1.0f, 0.5f);
                validateColor(new Color("FF", "FF", "00", 0.85f), 16776960, -637534464,
                        "#FFFF00", "#FF0", "#D9FFFF00", "#D9FFFF00", 255, 255, 0, 217,
                        0.85f, 60.0f, 1.0f, 0.5f);*/
        });

        it('test color HSL', function () {
                expect.fail('Not implemented');
                /*validateColor(new Color(new float[] { 0.0f, 0.0f, 0.0f }), 0, "#000000",
                        "#000", 0, 0, 0, 0.0f, 0.0f, 0.0f);
                validateColor(new Color(new float[] { 240.0f, 1.0f, 0.5f }), 255,
                        "#0000FF", "#00F", 0, 0, 255, 240.0f, 1.0f, 0.5f);
                validateColor(new Color(new float[] { 0.0f, 0.59420294f, 0.40588236f }),
                        10824234, "#A52A2A", "#A52A2A", 165, 42, 42, 0.0f, 0.59f,
                        0.41f);
                validateColor(new Color(new float[] { 180.0f, 1.0f, 0.5f }), 65535,
                        "#00FFFF", "#0FF", 0, 255, 255, 180.0f, 1.0f, 0.5f);
                validateColor(new Color(new float[] { 0.0f, 0.0f, 0.26666668f }),
                        4473924, "#444444", "#444", 68, 68, 68, 0.0f, 0.0f, 0.27f);
                validateColor(new Color(new float[] { 0.0f, 0.0f, 0.53333336f }),
                        8947848, "#888888", "#888", 136, 136, 136, 0.0f, 0.0f, 0.53f);
                validateColor(new Color(new float[] { 120.0f, 1.0f, 0.5f }), 65280,
                        "#00FF00", "#0F0", 0, 255, 0, 120.0f, 1.0f, 0.5f);
                validateColor(new Color(new float[] { 0.0f, 0.0f, 0.8f }), 13421772,
                        "#CCCCCC", "#CCC", 204, 204, 204, 0.0f, 0.0f, 0.8f);
                validateColor(new Color(new float[] { 300.0f, 1.0f, 0.5f }), 16711935,
                        "#FF00FF", "#F0F", 255, 0, 255, 300.0f, 1.0f, 0.5f);
                validateColor(new Color(new float[] { 38.823532f, 1.0f, 0.5f }),
                        16753920, "#FFA500", "#FFA500", 255, 165, 0, 39.0f, 1.0f, 0.5f);
                validateColor(new Color(new float[] { 349.5238f, 1.0f, 0.87647057f }),
                        16761035, "#FFC0CB", "#FFC0CB", 255, 192, 203, 350.0f, 1.0f,
                        0.88f);
                validateColor(new Color(new float[] { 300.0f, 1.0f, 0.2509804f }),
                        8388736, "#800080", "#800080", 128, 0, 128, 300.0f, 1.0f,
                        0.25f);
                validateColor(new Color(new float[] { 0.0f, 1.0f, 0.5f }), 16711680,
                        "#FF0000", "#F00", 255, 0, 0, 0.0f, 1.0f, 0.5f);
                validateColor(
                        new Color(new float[] { 300.0f, 0.76056343f, 0.72156864f }),
                        15631086, "#EE82EE", "#EE82EE", 238, 130, 238, 300.0f, 0.76f,
                        0.72f);
                validateColor(new Color(new float[] { 0.0f, 0.0f, 1.0f }), 16777215,
                        "#FFFFFF", "#FFF", 255, 255, 255, 0.0f, 0.0f, 1.0f);
                validateColor(new Color(new float[] { 60.0f, 1.0f, 0.5f }), 16776960,
                        "#FFFF00", "#FF0", 255, 255, 0, 60.0f, 1.0f, 0.5f);
        
                validateColor(
                        new Color(new float[] { 0.0f, 0.0f, 0.0f, 0.50196078431f }), 0,
                        Integer.MIN_VALUE, "#000000", "#000", "#80000000", "#80000000",
                        0, 0, 0, 128, 0.0f, 0.0f, 0.0f);
                validateColor(
                        new Color(
                                new float[] { 38.823532f, 1.0f, 0.5f, 0.25098039215f }),
                        16753920, 1090495744, "#FFA500", "#FFA500", "#40FFA500",
                        "#40FFA500", 255, 165, 0, 64, 39.0f, 1.0f, 0.5f);
                validateColor(
                        new Color(new float[] { 60.0f, 1.0f, 0.5f, 0.85098039215f }),
                        16776960, -637534464, "#FFFF00", "#FF0", "#D9FFFF00",
                        "#D9FFFF00", 255, 255, 0, 217, 60.0f, 1.0f, 0.5f);*/
        });

        function validateColor(color: Color, colorInt: number, hex: string,
                hexShorthand: string, red: number, green: number, blue: number, hue: number,
                saturation: number, lightness: number) {

                let hexAlpha = "#FF" + hex.substring(1);
                let hexShorthandAlpha = null;
                if (hexShorthand.length <= 4) {
                        hexShorthandAlpha = "#F" + hexShorthand.substring(1);
                } else {
                        hexShorthandAlpha = "#FF" + hexShorthand.substring(1);
                }
                let alpha = 255;
                let opacity = 1.0;
                let colorAlphaInt = (alpha & 0xff) << 24 | colorInt;

                validateColor3(color, colorInt, colorAlphaInt, hex, hexShorthand,
                        hexAlpha, hexShorthandAlpha, red, green, blue, alpha, opacity,
                        hue, saturation, lightness);
        }

        function validateColor2(color: Color, colorInt: number, colorAlphaInt: number,
                hex: string, hexShorthand: string, hexAlpha: string,
                hexShorthandAlpha: string, red: number, green: number, blue: number, alpha: number,
                hue: number, saturation: number, lightness: number) {

                validateColor3(color, colorInt, colorAlphaInt, hex, hexShorthand,
                        hexAlpha, hexShorthandAlpha, red, green, blue, alpha,
                        alpha / 255.0, hue, saturation, lightness);
        }

        function validateColor3(color: Color, colorInt: number, colorAlphaInt: number,
                hex: string, hexShorthand: string, hexAlpha: string,
                hexShorthandAlpha: string, red: number, green: number, blue: number, alpha: number,
                opacity: number, hue: number, saturation: number, lightness: number) {

                expect(color.getColorHex()).to.equal(hex);
                expect(color.getColorHexShorthand()).to.equal(hexShorthand);
                expect(color.getColorHexWithAlpha()).to.equal(hexAlpha);
                expect(color.getColorHexShorthandWithAlpha()).to.equal(hexShorthandAlpha);

                expect(color.getColor()).to.equal(colorInt);
                expect(color.getColorWithAlpha()).to.equal(colorAlphaInt);

                expect(color.getRed()).to.equal(red);
                expect(color.getRedArithmetic()).to.be.approximately(red / 255.0, 0.0000001);
                const redHex = hex.substring(1, 3);
                expect(color.getRedHex()).to.equal(redHex);
                expect(color.getRedHexShorthand()).to.equal(ColorUtils.shorthandHexSingle(redHex));

                expect(color.getGreen()).to.equal(green);
                expect(color.getGreenArithmetic()).to.be.approximately(green / 255.0, 0.0000001);
                const greenHex = hex.substring(3, 5);
                expect(color.getGreenHex()).to.equal(greenHex);
                expect(color.getGreenHexShorthand()).to.equal(ColorUtils.shorthandHexSingle(greenHex));

                expect(color.getBlue()).to.equal(blue);
                expect(color.getBlueArithmetic()).to.be.approximately(blue / 255.0, 0.0000001);
                const blueHex = hex.substring(5, 7);
                expect(color.getBlueHex()).to.equal(blueHex);
                expect(color.getBlueHexShorthand()).to.equal(ColorUtils.shorthandHexSingle(blueHex));

                expect(color.getOpacity()).to.be.approximately(opacity, 0.0000001);
                expect(color.getAlpha()).to.equal(alpha);
                expect(color.getAlphaArithmetic()).to.be.approximately(opacity, 0.0000001);
                const alphaHex = hexAlpha.substring(1, 3);
                expect(color.getAlphaHex()).to.equal(alphaHex);
                expect(color.getAlphaHexShorthand()).to.equal(ColorUtils.shorthandHexSingle(alphaHex));

                const hsl = color.getHSL();
                expect(hsl[0]).to.be.approximately(hue, 0.5);
                expect(hsl[1]).to.be.approximately(saturation, 0.01);
                expect(hsl[2]).to.be.approximately(lightness, 0.01);
                expect(color.getHue()).to.be.approximately(hue, 0.5);
                expect(color.getSaturation()).to.be.approximately(saturation, 0.01);
                expect(color.getLightness()).to.be.approximately(lightness, 0.01);
        }
})