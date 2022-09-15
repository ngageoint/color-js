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
                let color = new Color();
                color.setColor(0);
                validateColor(color, 0, "#000000", "#000", 0, 0, 0, 0.0, 0.0,
                        0.0);
                color = new Color();
                color.setColor(255);
                validateColor(color, 255, "#0000FF", "#00F", 0, 0, 255, 240.0,
                        1.0, 0.5);
                color = new Color();
                color.setColor(10824234);
                validateColor(color, 10824234, "#A52A2A", "#A52A2A", 165,
                        42, 42, 0.0, 0.59, 0.41);
                color = new Color();
                color.setColor(65535);
                validateColor(color, 65535, "#00FFFF", "#0FF", 0, 255, 255,
                        180.0, 1.0, 0.5);
                color = new Color();
                color.setColor(4473924);
                validateColor(color, 4473924, "#444444", "#444", 68, 68,
                        68, 0.0, 0.0, 0.27);
                color = new Color();
                color.setColor(8947848);
                validateColor(color, 8947848, "#888888", "#888", 136, 136,
                        136, 0.0, 0.0, 0.53);
                color = new Color();
                color.setColor(65280);
                validateColor(color, 65280, "#00FF00", "#0F0", 0, 255, 0,
                        120.0, 1.0, 0.5);
                color = new Color();
                color.setColor(13421772);
                validateColor(color, 13421772, "#CCCCCC", "#CCC", 204,
                        204, 204, 0.0, 0.0, 0.8);
                color = new Color();
                color.setColor(16711935);
                validateColor(color, 16711935, "#FF00FF", "#F0F", 255, 0,
                        255, 300.0, 1.0, 0.5);
                color = new Color();
                color.setColor(16753920);
                validateColor(color, 16753920, "#FFA500", "#FFA500", 255,
                        165, 0, 39.0, 1.0, 0.5);
                color = new Color();
                color.setColor(16761035);
                validateColor(color, 16761035, "#FFC0CB", "#FFC0CB", 255,
                        192, 203, 350.0, 1.0, 0.88);
                color = new Color();
                color.setColor(8388736);
                validateColor(color, 8388736, "#800080", "#800080", 128, 0,
                        128, 300.0, 1.0, 0.25);
                color = new Color();
                color.setColor(16711680);
                validateColor(color, 16711680, "#FF0000", "#F00", 255, 0,
                        0, 0.0, 1.0, 0.5);
                color = new Color();
                color.setColor(15631086);
                validateColor(color, 15631086, "#EE82EE", "#EE82EE", 238,
                        130, 238, 300.0, 0.76, 0.72);
                color = new Color();
                color.setColor(16777215);
                validateColor(color, 16777215, "#FFFFFF", "#FFF", 255,
                        255, 255, 0.0, 0.0, 1.0);
                color = new Color();
                color.setColor(16776960);
                validateColor(color, 16776960, "#FFFF00", "#FF0", 255,
                        255, 0, 60.0, 1.0, 0.5);
        });

        it('test color alpha integers', function () {
                let color = new Color();
                color.setColor(-16777216);
                validateColor(color, 0, "#000000", "#000", 0, 0, 0, 0.0,
                        0.0, 0.0);
                color = new Color();
                color.setColor(-16776961);
                validateColor(color, 255, "#0000FF", "#00F", 0, 0, 255,
                        240.0, 1.0, 0.5);
                color = new Color();
                color.setColor(-5952982);
                validateColor(color, 10824234, "#A52A2A", "#A52A2A", 165,
                        42, 42, 0.0, 0.59, 0.41);
                color = new Color();
                color.setColor(-16711681);
                validateColor(color, 65535, "#00FFFF", "#0FF", 0, 255,
                        255, 180.0, 1.0, 0.5);
                color = new Color();
                color.setColor(-12303292);
                validateColor(color, 4473924, "#444444", "#444", 68, 68,
                        68, 0.0, 0.0, 0.27);
                color = new Color();
                color.setColor(-7829368);
                validateColor(color, 8947848, "#888888", "#888", 136, 136,
                        136, 0.0, 0.0, 0.53);
                color = new Color();
                color.setColor(-16711936);
                validateColor(color, 65280, "#00FF00", "#0F0", 0, 255, 0,
                        120.0, 1.0, 0.5);
                color = new Color();
                color.setColor(-3355444);
                validateColor(color, 13421772, "#CCCCCC", "#CCC", 204,
                        204, 204, 0.0, 0.0, 0.8);
                color = new Color();
                color.setColor(-65281);
                validateColor(color, 16711935, "#FF00FF", "#F0F", 255, 0,
                        255, 300.0, 1.0, 0.5);
                color = new Color();
                color.setColor(-23296);
                validateColor(color, 16753920, "#FFA500", "#FFA500", 255,
                        165, 0, 39.0, 1.0, 0.5);
                color = new Color();
                color.setColor(-16181);
                validateColor(color, 16761035, "#FFC0CB", "#FFC0CB", 255,
                        192, 203, 350.0, 1.0, 0.88);
                color = new Color();
                color.setColor(-8388480);
                validateColor(color, 8388736, "#800080", "#800080", 128,
                        0, 128, 300.0, 1.0, 0.25);
                color = new Color();
                color.setColor(-65536);
                validateColor(color, 16711680, "#FF0000", "#F00", 255, 0, 0,
                        0.0, 1.0, 0.5);

                //TODO uncomment
                /*
                color = new Color();
                color.setColor(-65536);
                validateColor(color, 15631086, "#EE82EE", "#EE82EE", 238,
                        130, 238, 300.0, 0.7, 0.72);
                color = new Color();
                color.setColor(-1);
                validateColor(color, 16777215, "#FFFFFF", "#FFF", 255, 255, 255,
                        0.0, 0.0, 1.0);
                color = new Color();
                color.setColor(-256);
                validateColor(color, 16776960, "#FFFF00", "#FF0", 255, 255, 0,
                        60.0, 1.0, 0.5);

                color = new Color();
                color.setColor(16777216);
                validateColor3(color, 0, 16777216, "#000000", "#000",
                        "#01000000", "#01000000", 0, 0, 0, 1, 0.00392156862, 0.0,
                        0.0, 0.0);
                color = new Color();
                color.setColor(Number.MAX_SAFE_INTEGER);
                validateColor2(color, 16777215, 2147483647,
                        "#FFFFFF", "#FFF", "#7FFFFFFF", "#7FFFFFFF", 255, 255, 255, 127,
                        0.0, 0.0, 1.0);
                color = new Color();
                color.setColor(Number.MIN_SAFE_INTEGER);
                validateColor2(color, 0, Number.MIN_SAFE_INTEGER,
                        "#000000", "#000", "#80000000", "#80000000", 0, 0, 0, 128, 0.0,
                        0.0, 0.0);
                color = new Color();
                color.setColor(-1);
                validateColor3(color, 16777215, -1, "#FFFFFF", "#FFF",
                        "#FFFFFFFF", "#FFFF", 255, 255, 255, 255, 1.0, 0.0, 0.0,
                        1.0);*/

        });

        it('test color hex integers', function () {
                let color = new Color()
                color.setColor(0x000000);
                validateColor(color, 0, "#000000", "#000", 0, 0, 0, 0.0,
                        0.0, 0.0);
                color = new Color()
                color.setColor(0x0000FF);
                validateColor(color, 255, "#0000FF", "#00F", 0, 0, 255,
                        240.0, 1.0, 0.5);
                color = new Color()
                color.setColor(0xA52A2A);
                validateColor(color, 10824234, "#A52A2A", "#A52A2A", 165,
                        42, 42, 0.0, 0.59, 0.41);
                color = new Color()
                color.setColor(0x00FFFF);
                validateColor(color, 65535, "#00FFFF", "#0FF", 0, 255,
                        255, 180.0, 1.0, 0.5);
                color = new Color()
                color.setColor(0x444444);
                validateColor(color, 4473924, "#444444", "#444", 68, 68,
                        68, 0.0, 0.0, 0.27);
                color = new Color()
                color.setColor(0x888888);
                validateColor(color, 8947848, "#888888", "#888", 136, 136,
                        136, 0.0, 0.0, 0.53);
                color = new Color()
                color.setColor(0x00FF00);
                validateColor(color, 65280, "#00FF00", "#0F0", 0, 255, 0,
                        120.0, 1.0, 0.5);
                color = new Color()
                color.setColor(0xCCCCCC);
                validateColor(color, 13421772, "#CCCCCC", "#CCC", 204,
                        204, 204, 0.0, 0.0, 0.8);
                color = new Color()
                color.setColor(0xFF00FF);
                validateColor(color, 16711935, "#FF00FF", "#F0F", 255, 0,
                        255, 300.0, 1.0, 0.5);
                color = new Color()
                color.setColor(0xFFA500);
                validateColor(color, 16753920, "#FFA500", "#FFA500", 255,
                        165, 0, 39.0, 1.0, 0.5);
                color = new Color()
                color.setColor(0xFFC0CB);
                validateColor(color, 16761035, "#FFC0CB", "#FFC0CB", 255,
                        192, 203, 350.0, 1.0, 0.88);
                color = new Color()
                color.setColor(0x800080);
                validateColor(color, 8388736, "#800080", "#800080", 128,
                        0, 128, 300.0, 1.0, 0.25);
                color = new Color()
                color.setColor(0xFF0000);
                validateColor(color, 16711680, "#FF0000", "#F00", 255, 0,
                        0, 0.0, 1.0, 0.5);
                color = new Color()
                color.setColor(0xEE82EE);
                validateColor(color, 15631086, "#EE82EE", "#EE82EE", 238,
                        130, 238, 300.0, 0.76, 0.72);
                color = new Color()
                color.setColor(0xFFFFFF);
                validateColor(color, 16777215, "#FFFFFF", "#FFF", 255,
                        255, 255, 0.0, 0.0, 1.0);
                color = new Color()
                color.setColor(0xFFFF00);
                validateColor(color, 16776960, "#FFFF00", "#FF0", 255,
                        255, 0, 60.0, 1.0, 0.5);

                //TODO fix
                /*color = new Color()
                color.setColor(0x80000000);
                validateColor2(color, 0, Number.MIN_SAFE_INTEGER, "#000000",
                        "#000", "#80000000", "#80000000", 0, 0, 0, 128, 0.0, 0.0,
                        0.0);
                color = new Color()
                color.setColor(0x40FFA500);
                validateColor2(color, 16753920, 1090495744, "#FFA500",
                        "#FFA500", "#40FFA500", "#40FFA500", 255, 165, 0, 64, 39.0,
                        1.0, 0.5);
                color = new Color()
                color.setColor(0xD9FFFF00);
                validateColor2(color, 16776960, -637534464, "#FFFF00",
                        "#FF0", "#D9FFFF00", "#D9FFFF00", 255, 255, 0, 217, 60.0, 1.0,
                        0.5);

                color = new Color()
                color.setColor(0x80000000);
                validateColor2(color, 0, Number.MIN_SAFE_INTEGER, "#000000",
                        "#000", "#80000000", "#80000000", 0, 0, 0, 128, 0.0, 0.0,
                        0.0);
                color = new Color()
                color.setColor(0x40FFA500);
                validateColor2(color, 16753920, 1090495744, "#FFA500",
                        "#FFA500", "#40FFA500", "#40FFA500", 255, 165, 0, 64, 39.0,
                        1.0, 0.5);
                color = new Color()
                color.setColor(0xD9FFFF00);
                validateColor2(color, 16776960, -637534464, "#FFFF00",
                        "#FF0", "#D9FFFF00", "#D9FFFF00", 255, 255, 0, 217, 60.0, 1.0,
                        0.5);*/
        });

        it('test color RGB', function () {
                let color = new Color();
                color.setRGB(0, 0, 0);
                validateColor(color, 0, "#000000", "#000", 0, 0, 0, 0.0,
                        0.0, 0.0);
                color = new Color();
                color.setRGB(0, 0, 255);
                validateColor(color, 255, "#0000FF", "#00F", 0, 0, 255,
                        240.0, 1.0, 0.5);
                color = new Color();
                color.setRGB(165, 42, 42);
                validateColor(color, 10824234, "#A52A2A", "#A52A2A",
                        165, 42, 42, 0.0, 0.59, 0.41);
                color = new Color();
                color.setRGB(0, 255, 255);
                validateColor(color, 65535, "#00FFFF", "#0FF", 0, 255,
                        255, 180.0, 1.0, 0.5);
                color = new Color();
                color.setRGB(68, 68, 68);
                validateColor(color, 4473924, "#444444", "#444", 68, 68,
                        68, 0.0, 0.0, 0.27);
                color = new Color();
                color.setRGB(136, 136, 136);
                validateColor(color, 8947848, "#888888", "#888", 136,
                        136, 136, 0.0, 0.0, 0.53);
                color = new Color();
                color.setRGB(0, 255, 0);
                validateColor(color, 65280, "#00FF00", "#0F0", 0, 255, 0,
                        120.0, 1.0, 0.5);
                color = new Color();
                color.setRGB(204, 204, 204);
                validateColor(color, 13421772, "#CCCCCC", "#CCC",
                        204, 204, 204, 0.0, 0.0, 0.8);
                color = new Color();
                color.setRGB(255, 0, 255);
                validateColor(color, 16711935, "#FF00FF", "#F0F", 255,
                        0, 255, 300.0, 1.0, 0.5);
                color = new Color();
                color.setRGB(255, 165, 0);
                validateColor(color, 16753920, "#FFA500", "#FFA500",
                        255, 165, 0, 39.0, 1.0, 0.5);
                color = new Color();
                color.setRGB(255, 192, 203);
                validateColor(color, 16761035, "#FFC0CB", "#FFC0CB",
                        255, 192, 203, 350.0, 1.0, 0.88);
                color = new Color();
                color.setRGB(128, 0, 128);
                validateColor(color, 8388736, "#800080", "#800080",
                        128, 0, 128, 300.0, 1.0, 0.25);
                color = new Color();
                color.setRGB(255, 0, 0);
                validateColor(color, 16711680, "#FF0000", "#F00", 255, 0,
                        0, 0.0, 1.0, 0.5);
                color = new Color();
                color.setRGB(238, 130, 238);
                validateColor(color, 15631086, "#EE82EE", "#EE82EE",
                        238, 130, 238, 300.0, 0.76, 0.72);
                color = new Color();
                color.setRGB(255, 255, 255);
                validateColor(color, 16777215, "#FFFFFF", "#FFF",
                        255, 255, 255, 0.0, 0.0, 1.0);
                color = new Color();
                color.setRGB(255, 255, 0);
                validateColor(color, 16776960, "#FFFF00", "#FF0", 255,
                        255, 0, 60.0, 1.0, 0.5);

                //TODO fix
                /*color = new Color();
                color.setRGB(0, 0, 0);
                color.setAlpha(128);
                validateColor2(color, 0, Number.MIN_SAFE_INTEGER, "#000000",
                        "#000", "#80000000", "#80000000", 0, 0, 0, 128, 0.0, 0.0,
                        0.0);
                color = new Color();
                color.setRGB(255, 165, 0);
                color.setAlpha(64);
                validateColor2(color, 16753920, 1090495744,
                        "#FFA500", "#FFA500", "#40FFA500", "#40FFA500", 255, 165, 0, 64,
                        39.0, 1.0, 0.5);
                color = new Color();
                color.setRGB(255, 255, 0);
                color.setAlpha(217);
                validateColor2(color, 16776960, -637534464,
                        "#FFFF00", "#FF0", "#D9FFFF00", "#D9FFFF00", 255, 255, 0, 217,
                        60.0, 1.0, 0.5);

                color = new Color();
                color.setRGB(0, 0, 0);
                color.setAlpha(0.5);
                validateColor3(color, 0, Number.MIN_SAFE_INTEGER, "#000000",
                        "#000", "#80000000", "#80000000", 0, 0, 0, 128, 0.5, 0.0,
                        0.0, 0.0);
                color = new Color();
                color.setRGB(255, 165, 0);
                color.setAlpha(0.25);
                validateColor3(color, 16753920, 1090495744,
                        "#FFA500", "#FFA500", "#40FFA500", "#40FFA500", 255, 165, 0, 64,
                        0.25, 39.0, 1.0, 0.5);
                color = new Color();
                color.setRGB(255, 255, 0);
                color.setAlpha(0.85);
                validateColor3(color, 16776960, -637534464,
                        "#FFFF00", "#FF0", "#D9FFFF00", "#D9FFFF00", 255, 255, 0, 217,
                        0.85, 60.0, 1.0, 0.5);*/
        });

        it('test color arithmetic', function () {
                let color = new Color();
                color.setRGB(0.0, 0.0, 0.0);
                validateColor(color, 0, "#000000", "#000", 0, 0,
                        0, 0.0, 0.0, 0.0);
                color = new Color();
                color.setRGB(0.0, 0.0, 1.0);
                validateColor(color, 255, "#0000FF", "#00F", 0, 0,
                        255, 240.0, 1.0, 0.5);
                color = new Color();
                color.setRGB(0.64705882352, 0.16470588235, 0.16470588235);
                validateColor(color,
                        10824234, "#A52A2A", "#A52A2A", 165, 42, 42, 0.0, 0.59,
                        0.41);
                color = new Color();
                color.setRGB(0.0, 1.0, 1.0);
                validateColor(color, 65535, "#00FFFF", "#0FF", 0,
                        255, 255, 180.0, 1.0, 0.5);
                color = new Color();
                color.setRGB(0.26666666666, 0.26666666666, 0.26666666666);
                validateColor(color,
                        4473924, "#444444", "#444", 68, 68, 68, 0.0, 0.0, 0.27);
                color = new Color();
                color.setRGB(0.53333333333, 0.53333333333, 0.53333333333);
                validateColor(color,
                        8947848, "#888888", "#888", 136, 136, 136, 0.0, 0.0, 0.53);
                color = new Color();
                color.setRGB(0.0, 1.0, 0.0);
                validateColor(color, 65280, "#00FF00", "#0F0", 0,
                        255, 0, 120.0, 1.0, 0.5);
                color = new Color();
                color.setRGB(0.8, 0.8, 0.8);
                validateColor(color, 13421772, "#CCCCCC", "#CCC",
                        204, 204, 204, 0.0, 0.0, 0.8);
                color = new Color();
                color.setRGB(1.0, 0.0, 1.0);
                validateColor(color, 16711935, "#FF00FF", "#F0F",
                        255, 0, 255, 300.0, 1.0, 0.5);
                color = new Color();
                color.setRGB(1.0, 0.64705882352, 0.0);
                validateColor(color, 16753920,
                        "#FFA500", "#FFA500", 255, 165, 0, 39.0, 1.0, 0.5);
                color = new Color();
                color.setRGB(1.0, 0.75294117647, 0.79607843137);
                validateColor(color, 16761035,
                        "#FFC0CB", "#FFC0CB", 255, 192, 203, 350.0, 1.0, 0.88);
                color = new Color();
                color.setRGB(0.50196078431, 0.0, 0.50196078431);
                validateColor(color, 8388736,
                        "#800080", "#800080", 128, 0, 128, 300.0, 1.0, 0.25);
                color = new Color();
                color.setRGB(1.0, 0.0, 0.0);
                validateColor(color, 16711680, "#FF0000", "#F00",
                        255, 0, 0, 0.0, 1.0, 0.5);
                color = new Color();
                color.setRGB(0.93333333333, 0.50980392156, 0.93333333333);
                validateColor(color,
                        15631086, "#EE82EE", "#EE82EE", 238, 130, 238, 300.0, 0.76,
                        0.72);
                color = new Color();
                color.setRGB(1.0, 1.0, 1.0);
                validateColor(color, 16777215, "#FFFFFF", "#FFF",
                        255, 255, 255, 0.0, 0.0, 1.0);
                color = new Color();
                color.setRGB(1.0, 1.0, 0.0);
                validateColor(color, 16776960, "#FFFF00", "#FF0",
                        255, 255, 0, 60.0, 1.0, 0.5);

                //TODO fix
                /*color = new Color();
                color.setRGB(0.0, 0.0, 0.0);
                color.setAlpha(0.50196078431);
                validateColor2(color, 0,
                        Number.MIN_SAFE_INTEGER, "#000000", "#000", "#80000000", "#80000000",
                        0, 0, 0, 128, 0.0, 0.0, 0.0);
                color = new Color();
                color.setRGB(1.0, 0.64705882352, 0.0);
                color.setAlpha(0.25098039215);
                validateColor2(color,
                        16753920, 1090495744, "#FFA500", "#FFA500", "#40FFA500",
                        "#40FFA500", 255, 165, 0, 64, 39.0, 1.0, 0.5);
                color = new Color();
                color.setRGB(1.0, 1.0, 0.0);
                color.setAlpha(0.85098039215);
                validateColor2(color, 16776960,
                        -637534464, "#FFFF00", "#FF0", "#D9FFFF00", "#D9FFFF00", 255,
                        255, 0, 217, 60.0, 1.0, 0.5);*/
        });

        it('test color hex singles', function () {
                let color = new Color();
                color.setRGB("00", "00", "00");
                validateColor(color, 0, "#000000", "#000", 0, 0,
                        0, 0.0, 0.0, 0.0);
                color = new Color();
                color.setRGB("00", "00", "FF");
                validateColor(color, 255, "#0000FF", "#00F", 0, 0,
                        255, 240.0, 1.0, 0.5);
                color = new Color();
                color.setRGB("a5", "2a", "2a");
                validateColor(color, 10824234, "#A52A2A",
                        "#A52A2A", 165, 42, 42, 0.0, 0.59, 0.41);
                color = new Color();
                color.setRGB("00", "FF", "f");
                validateColor(color, 65535, "#00FFFF", "#0FF", 0,
                        255, 255, 180.0, 1.0, 0.5);
                color = new Color();
                color.setRGB("44", "4", "44");
                validateColor(color, 4473924, "#444444", "#444",
                        68, 68, 68, 0.0, 0.0, 0.27);
                color = new Color();
                color.setRGB("8", "88", "8");
                validateColor(color, 8947848, "#888888", "#888",
                        136, 136, 136, 0.0, 0.0, 0.53);
                color = new Color();
                color.setRGB("00", "ff", "00");
                validateColor(color, 65280, "#00FF00", "#0F0", 0,
                        255, 0, 120.0, 1.0, 0.5);
                color = new Color();
                color.setRGB("c", "C", "c");
                validateColor(color, 13421772, "#CCCCCC", "#CCC",
                        204, 204, 204, 0.0, 0.0, 0.8);
                color = new Color();
                color.setRGB("fF", "00", "Ff");
                validateColor(color, 16711935, "#FF00FF", "#F0F",
                        255, 0, 255, 300.0, 1.0, 0.5);
                color = new Color();
                color.setRGB("F", "A5", "0");
                validateColor(color, 16753920, "#FFA500", "#FFA500",
                        255, 165, 0, 39.0, 1.0, 0.5);
                color = new Color();
                color.setRGB("FF", "C0", "CB");
                validateColor(color, 16761035, "#FFC0CB",
                        "#FFC0CB", 255, 192, 203, 350.0, 1.0, 0.88);
                color = new Color();
                color.setRGB("80", "00", "80");
                validateColor(color, 8388736, "#800080",
                        "#800080", 128, 0, 128, 300.0, 1.0, 0.25);
                color = new Color();
                color.setRGB("ff", "00", "00");
                validateColor(color, 16711680, "#FF0000", "#F00",
                        255, 0, 0, 0.0, 1.0, 0.5);
                color = new Color();
                color.setRGB("ee", "82", "ee");
                validateColor(color, 15631086, "#EE82EE",
                        "#EE82EE", 238, 130, 238, 300.0, 0.76, 0.72);
                color = new Color();
                color.setRGB("FF", "FF", "FF");
                validateColor(color, 16777215, "#FFFFFF", "#FFF",
                        255, 255, 255, 0.0, 0.0, 1.0);
                color = new Color();
                color.setRGB("f", "f", "0");
                validateColor(color, 16776960, "#FFFF00", "#FF0",
                        255, 255, 0, 60.0, 1.0, 0.5);

                //TODO fix
                /*color = new Color();
                color.setRGB("00", "00", "00");
                color.setAlpha("80");
                validateColor2(color, 0, Number.MIN_SAFE_INTEGER,
                        "#000000", "#000", "#80000000", "#80000000", 0, 0, 0, 128, 0.0,
                        0.0, 0.0);
                color = new Color();
                color.setRGB("f", "A5", "0");
                color.setAlpha("40");
                validateColor2(color, 16753920, 1090495744,
                        "#FFA500", "#FFA500", "#40FFA500", "#40FFA500", 255, 165, 0, 64,
                        39.0, 1.0, 0.5);
                color = new Color();
                color.setRGB("ff", "F", "00");
                color.setAlpha("D9");
                validateColor2(color, 16776960, -637534464,
                        "#FFFF00", "#FF0", "#D9FFFF00", "#D9FFFF00", 255, 255, 0, 217,
                        60.0, 1.0, 0.5);

                color = new Color();
                color.setRGB("00", "00", "00");
                color.setOpacity(0.5);
                validateColor3(color, 0, Number.MIN_SAFE_INTEGER,
                        "#000000", "#000", "#80000000", "#80000000", 0, 0, 0, 128, 0.5,
                        0.0, 0.0, 0.0);
                color = new Color();
                color.setAlpha(0.25);
                color.setRGB("ff", "a5", "00");
                validateColor3(color, 16753920, 1090495744,
                        "#FFA500", "#FFA500", "#40FFA500", "#40FFA500", 255, 165, 0, 64,
                        0.25, 39.0, 1.0, 0.5);
                color = new Color();
                color.setOpacity(0.85);
                color.setRGB("FF", "FF", "00");
                validateColor3(color, 16776960, -637534464,
                        "#FFFF00", "#FF0", "#D9FFFF00", "#D9FFFF00", 255, 255, 0, 217,
                        0.85, 60.0, 1.0, 0.5);*/
        });

        it('test color HSL', function () {
                let color = new Color();
                color.setColorByHSL(0.0, 0.0, 0.0);
                validateColor(color, 0, "#000000",
                        "#000", 0, 0, 0, 0.0, 0.0, 0.0);
                color = new Color();
                color.setColorByHSL(240.0, 1.0, 0.5);
                validateColor(color, 255,
                        "#0000FF", "#00F", 0, 0, 255, 240.0, 1.0, 0.5);
                color = new Color();
                color.setColorByHSL(0.0, 0.59420294, 0.40588236);
                validateColor(color,
                        10824234, "#A52A2A", "#A52A2A", 165, 42, 42, 0.0, 0.59,
                        0.41);
                color = new Color();
                color.setColorByHSL(180.0, 1.0, 0.5);
                validateColor(color, 65535,
                        "#00FFFF", "#0FF", 0, 255, 255, 180.0, 1.0, 0.5);
                color = new Color();
                color.setColorByHSL(0.0, 0.0, 0.26666668);
                validateColor(color,
                        4473924, "#444444", "#444", 68, 68, 68, 0.0, 0.0, 0.27);
                color = new Color();
                color.setColorByHSL(0.0, 0.0, 0.53333336);
                validateColor(color,
                        8947848, "#888888", "#888", 136, 136, 136, 0.0, 0.0, 0.53);
                color = new Color();
                color.setColorByHSL(120.0, 1.0, 0.5);
                validateColor(color, 65280,
                        "#00FF00", "#0F0", 0, 255, 0, 120.0, 1.0, 0.5);
                color = new Color();
                color.setColorByHSL(0.0, 0.0, 0.8);
                validateColor(color, 13421772,
                        "#CCCCCC", "#CCC", 204, 204, 204, 0.0, 0.0, 0.8);
                color = new Color();
                color.setColorByHSL(300.0, 1.0, 0.5);
                validateColor(color, 16711935,
                        "#FF00FF", "#F0F", 255, 0, 255, 300.0, 1.0, 0.5);
                color = new Color();
                color.setColorByHSL(38.823532, 1.0, 0.5);
                validateColor(color,
                        16753920, "#FFA500", "#FFA500", 255, 165, 0, 39.0, 1.0, 0.5);
                color = new Color();
                color.setColorByHSL(349.5238, 1.0, 0.87647057);
                validateColor(color,
                        16761035, "#FFC0CB", "#FFC0CB", 255, 192, 203, 350.0, 1.0,
                        0.88);
                color = new Color();
                color.setColorByHSL(300.0, 1.0, 0.2509804);
                validateColor(color,
                        8388736, "#800080", "#800080", 128, 0, 128, 300.0, 1.0,
                        0.25);
                color = new Color();
                color.setColorByHSL(0.0, 1.0, 0.5);
                validateColor(color, 16711680,
                        "#FF0000", "#F00", 255, 0, 0, 0.0, 1.0, 0.5);
                color = new Color();
                color.setColorByHSL(300.0, 0.76056343, 0.72156864);
                validateColor(
                        color,
                        15631086, "#EE82EE", "#EE82EE", 238, 130, 238, 300.0, 0.76,
                        0.72);
                color = new Color();
                color.setColorByHSL(0.0, 0.0, 1.0);
                validateColor(color, 16777215,
                        "#FFFFFF", "#FFF", 255, 255, 255, 0.0, 0.0, 1.0);
                color = new Color();
                color.setColorByHSL(60.0, 1.0, 0.5);
                validateColor(color, 16776960,
                        "#FFFF00", "#FF0", 255, 255, 0, 60.0, 1.0, 0.5);

                //TODO fix
                /*color = new Color();
                color.setColorByHSL(0.0, 0.0, 0.0, 0.50196078431);
                validateColor2(
                        color, 0,
                        Number.MIN_SAFE_INTEGER, "#000000", "#000", "#80000000", "#80000000",
                        0, 0, 0, 128, 0.0, 0.0, 0.0);
                color = new Color();
                color.setColorByHSL(38.823532, 1.0, 0.5, 0.25098039215);
                validateColor2(
                        color,
                        16753920, 1090495744, "#FFA500", "#FFA500", "#40FFA500",
                        "#40FFA500", 255, 165, 0, 64, 39.0, 1.0, 0.5);
                color = new Color();
                color.setColorByHSL(60.0, 1.0, 0.5, 0.85098039215);
                validateColor2(
                        color,
                        16776960, -637534464, "#FFFF00", "#FF0", "#D9FFFF00",
                        "#D9FFFF00", 255, 255, 0, 217, 60.0, 1.0, 0.5);*/
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