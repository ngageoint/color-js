
import { ColorUtils } from '../dist/ColorUtils';
import { expect } from 'chai';

describe('ColorUtils Tests', function () {

	it('test valid', function () {
		expect(ColorUtils.isValidHex("000000")).to.be.true;
		expect(ColorUtils.isValidHex("#000000")).to.be.true;
		expect(ColorUtils.isValidHex("00000000")).to.be.true;
		expect(ColorUtils.isValidHex("#00000000")).to.be.true;
		expect(ColorUtils.isValidHex("000")).to.be.true;
		expect(ColorUtils.isValidHex("#000")).to.be.true;
		expect(ColorUtils.isValidHex("0000")).to.be.true;
		expect(ColorUtils.isValidHex("#0000")).to.be.true;
		expect(ColorUtils.isValidHex("FFFFFF")).to.be.true;
		expect(ColorUtils.isValidHex("#FFFFFF")).to.be.true;
		expect(ColorUtils.isValidHex("FFFFFFFF")).to.be.true;
		expect(ColorUtils.isValidHex("#ffffffff")).to.be.true;
		expect(ColorUtils.isValidHex("FfF")).to.be.true;
		expect(ColorUtils.isValidHex("#fFf")).to.be.true;
		expect(ColorUtils.isValidHex("ffff")).to.be.true;
		expect(ColorUtils.isValidHex("#fFfF")).to.be.true;

		expect(ColorUtils.isValidHex(null)).to.be.false;
		expect(ColorUtils.isValidHex("")).to.be.false;

		expect(ColorUtils.isValidHex("00000")).to.be.false;
		expect(ColorUtils.isValidHex("0000000")).to.be.false;
		expect(ColorUtils.isValidHex("#00000")).to.be.false;
		expect(ColorUtils.isValidHex("#0000000")).to.be.false;
		expect(ColorUtils.isValidHex("000000000")).to.be.false;
		expect(ColorUtils.isValidHex("#000000000")).to.be.false;
		expect(ColorUtils.isValidHex("00")).to.be.false;
		expect(ColorUtils.isValidHex("#00")).to.be.false;
		expect(ColorUtils.isValidHex("FFFFF")).to.be.false;
		expect(ColorUtils.isValidHex("FFFFFFF")).to.be.false;
		expect(ColorUtils.isValidHex("#FFFFF")).to.be.false;
		expect(ColorUtils.isValidHex("#FFFFFFF")).to.be.false;
		expect(ColorUtils.isValidHex("FFFFFFFFF")).to.be.false;
		expect(ColorUtils.isValidHex("#FFFFFFFFF")).to.be.false;
		expect(ColorUtils.isValidHex("FF")).to.be.false;
		expect(ColorUtils.isValidHex("#FF")).to.be.false;
		
		expect(ColorUtils.isValidHex("G00000")).to.be.false;
		expect(ColorUtils.isValidHex("#00000H")).to.be.false;
		expect(ColorUtils.isValidHex("000i0000")).to.be.false;
		expect(ColorUtils.isValidHex("#0000J000")).to.be.false;
		expect(ColorUtils.isValidHex("00K")).to.be.false;
		expect(ColorUtils.isValidHex("#0l0")).to.be.false;
		expect(ColorUtils.isValidHex("0M00")).to.be.false;
		expect(ColorUtils.isValidHex("#n000")).to.be.false;
		expect(ColorUtils.isValidHex("FFGFFF")).to.be.false;
		expect(ColorUtils.isValidHex("#FFFHFF")).to.be.false;
		expect(ColorUtils.isValidHex("iFFFFFFF")).to.be.false;
		expect(ColorUtils.isValidHex("#FFFFFFFj")).to.be.false;
		expect(ColorUtils.isValidHex("FFK")).to.be.false;
		expect(ColorUtils.isValidHex("#LFF")).to.be.false;
		expect(ColorUtils.isValidHex("FFmF")).to.be.false;
		expect(ColorUtils.isValidHex("#FnFF")).to.be.false;

		expect(ColorUtils.isValidHexSingle("00")).to.be.true;
		expect(ColorUtils.isValidHexSingle("FF")).to.be.true;
		expect(ColorUtils.isValidHexSingle("ff")).to.be.true;
		expect(ColorUtils.isValidHexSingle("aB")).to.be.true;
		expect(ColorUtils.isValidHexSingle("C5")).to.be.true;
		expect(ColorUtils.isValidHexSingle("d")).to.be.true;
		expect(ColorUtils.isValidHexSingle("E")).to.be.true;
		expect(ColorUtils.isValidHexSingle("4")).to.be.true;

		expect(ColorUtils.isValidHexSingle(null)).to.be.false;
		expect(ColorUtils.isValidHexSingle("")).to.be.false;

		expect(ColorUtils.isValidHexSingle("000")).to.be.false;
		expect(ColorUtils.isValidHexSingle("0ff")).to.be.false;
		expect(ColorUtils.isValidHexSingle("G0")).to.be.false;
		expect(ColorUtils.isValidHexSingle("#00")).to.be.false;

		expect(ColorUtils.isValidRGB(-1)).to.be.false;
		expect(ColorUtils.isValidRGB(0)).to.be.true;
		expect(ColorUtils.isValidRGB(128)).to.be.true;
		expect(ColorUtils.isValidRGB(255)).to.be.true;
		expect(ColorUtils.isValidRGB(256)).to.be.false;

		expect(ColorUtils.isValidArithmeticRGB(0.0 - .0000001)).to.be.false;
		expect(ColorUtils.isValidArithmeticRGB(0.0)).to.be.true;
		expect(ColorUtils.isValidArithmeticRGB(0.5)).to.be.true;
		expect(ColorUtils.isValidArithmeticRGB(1.0)).to.be.true;
		expect(ColorUtils.isValidArithmeticRGB(1.0 + .000000)).to.be.false;

		expect(ColorUtils.isValidHue(-0.0001)).to.be.false;
		expect(ColorUtils.isValidHue(0.0)).to.be.true;
		expect(ColorUtils.isValidHue(180.0)).to.be.true;
		expect(ColorUtils.isValidHue(360.0)).to.be.true;
		expect(ColorUtils.isValidHue(360.0001)).to.be.false;

		expect(ColorUtils.isValidSaturation(-0.0001)).to.be.false;
		expect(ColorUtils.isValidSaturation(0.0)).to.be.true;
		expect(ColorUtils.isValidSaturation(0.5)).to.be.true;
		expect(ColorUtils.isValidSaturation(1.0)).to.be.true;
		expect(ColorUtils.isValidSaturation(1.0001)).to.be.false;

		expect(ColorUtils.isValidLightness(-0.0001)).to.be.false;
		expect(ColorUtils.isValidLightness(0.0)).to.be.true;
		expect(ColorUtils.isValidLightness(0.5)).to.be.true;
		expect(ColorUtils.isValidLightness(1.0)).to.be.true;
		expect(ColorUtils.isValidLightness(1.0001)).to.be.false;
	});

	it('test utils', function () {
		expect(ColorUtils.toArithmeticRGB(95)).to.be.approximately(0.37254903, 0.0000001);
		expect(ColorUtils.toRGB(ColorUtils.toArithmeticRGB(95))).to.equal(95);
		expect(ColorUtils.toRGB("5F")).to.equal(95);
		//TODO implement
		/*
		TestCase.assertEquals(0.37254903, ColorUtils.toArithmeticRGB("5F"),
				0.0000001);

		TestCase.assertEquals(0, ColorUtils.toRGB("00"));
		TestCase.assertEquals(0.0, ColorUtils.toArithmeticRGB("00"), 0.0);
		TestCase.assertEquals(128, ColorUtils.toRGB("80"));
		TestCase.assertEquals(0.5019608, ColorUtils.toArithmeticRGB("80"),
				0.0000001);
		TestCase.assertEquals(255, ColorUtils.toRGB("FF"));
		TestCase.assertEquals(1.0, ColorUtils.toArithmeticRGB("FF"), 0.0);
		TestCase.assertEquals(255, ColorUtils.toRGB("ff"));
		TestCase.assertEquals(1.0, ColorUtils.toArithmeticRGB("ff"), 0.0);
		TestCase.assertEquals(255, ColorUtils.toRGB("f"));
		TestCase.assertEquals(1.0, ColorUtils.toArithmeticRGB("f"), 0.0);

		TestCase.assertEquals("00", ColorUtils.toHex(0));
		TestCase.assertEquals("00", ColorUtils.toHex(0.0f));
		TestCase.assertEquals("06", ColorUtils.toHex(6));
		TestCase.assertEquals("06", ColorUtils.toHex(0.02352941176f));
		TestCase.assertEquals("80", ColorUtils.toHex(128));
		TestCase.assertEquals("80", ColorUtils.toHex(0.5f));
		TestCase.assertEquals("FF", ColorUtils.toHex(255));
		TestCase.assertEquals("FF", ColorUtils.toHex(1.0f));

		TestCase.assertEquals("A1", ColorUtils.getRed("A1B2C3"));
		TestCase.assertEquals("b2", ColorUtils.getGreen("a1b2c3"));
		TestCase.assertEquals("C3", ColorUtils.getBlue("a1b2C3"));
		TestCase.assertNull(ColorUtils.getAlpha("A1B2C3"));
		TestCase.assertEquals("A1", ColorUtils.getRed("D4A1B2C3"));
		TestCase.assertEquals("b2", ColorUtils.getGreen("d4a1b2c3"));
		TestCase.assertEquals("C3", ColorUtils.getBlue("d4a1b2C3"));
		TestCase.assertEquals("Dd", ColorUtils.getAlpha("DdA1B2C3"));

		TestCase.assertEquals("A1", ColorUtils.getRed("#A1B2C3"));
		TestCase.assertEquals("b2", ColorUtils.getGreen("#a1b2c3"));
		TestCase.assertEquals("C3", ColorUtils.getBlue("#a1b2C3"));
		TestCase.assertNull(ColorUtils.getAlpha("#A1B2C3"));
		TestCase.assertEquals("A1", ColorUtils.getRed("#D4A1B2C3"));
		TestCase.assertEquals("b2", ColorUtils.getGreen("#d4a1b2c3"));
		TestCase.assertEquals("C3", ColorUtils.getBlue("#d4a1b2C3"));
		TestCase.assertEquals("dD", ColorUtils.getAlpha("#dDA1B2C3"));

		TestCase.assertEquals("AA", ColorUtils.getRed("ABC"));
		TestCase.assertEquals("bb", ColorUtils.getGreen("abc"));
		TestCase.assertEquals("CC", ColorUtils.getBlue("abC"));
		TestCase.assertNull(ColorUtils.getAlpha("ABC"));
		TestCase.assertEquals("AA", ColorUtils.getRed("DABC"));
		TestCase.assertEquals("bb", ColorUtils.getGreen("dabc"));
		TestCase.assertEquals("CC", ColorUtils.getBlue("dabC"));
		TestCase.assertEquals("DD", ColorUtils.getAlpha("DABC"));

		TestCase.assertEquals("AA", ColorUtils.getRed("#ABC"));
		TestCase.assertEquals("bb", ColorUtils.getGreen("#abc"));
		TestCase.assertEquals("CC", ColorUtils.getBlue("#abC"));
		TestCase.assertNull(ColorUtils.getAlpha("#ABC"));
		TestCase.assertEquals("AA", ColorUtils.getRed("#DABC"));
		TestCase.assertEquals("bb", ColorUtils.getGreen("#dabc"));
		TestCase.assertEquals("CC", ColorUtils.getBlue("#dabC"));
		TestCase.assertEquals("DD", ColorUtils.getAlpha("#DABC"));

		TestCase.assertEquals("01", ColorUtils.getRed("010203"));
		TestCase.assertEquals("02", ColorUtils.getGreen("010203"));
		TestCase.assertEquals("03", ColorUtils.getBlue("010203"));
		TestCase.assertNull(ColorUtils.getAlpha("010203"));
		TestCase.assertEquals("01", ColorUtils.getRed("04010203"));
		TestCase.assertEquals("02", ColorUtils.getGreen("04010203"));
		TestCase.assertEquals("03", ColorUtils.getBlue("04010203"));
		TestCase.assertEquals("04", ColorUtils.getAlpha("04010203"));

		TestCase.assertEquals("01", ColorUtils.getRed("#010203"));
		TestCase.assertEquals("02", ColorUtils.getGreen("#010203"));
		TestCase.assertEquals("03", ColorUtils.getBlue("#010203"));
		TestCase.assertNull(ColorUtils.getAlpha("#010203"));
		TestCase.assertEquals("01", ColorUtils.getRed("#04010203"));
		TestCase.assertEquals("02", ColorUtils.getGreen("#04010203"));
		TestCase.assertEquals("03", ColorUtils.getBlue("#04010203"));
		TestCase.assertEquals("04", ColorUtils.getAlpha("#04010203"));

		TestCase.assertEquals("11", ColorUtils.getRed("123"));
		TestCase.assertEquals("22", ColorUtils.getGreen("123"));
		TestCase.assertEquals("33", ColorUtils.getBlue("123"));
		TestCase.assertNull(ColorUtils.getAlpha("123"));
		TestCase.assertEquals("11", ColorUtils.getRed("4123"));
		TestCase.assertEquals("22", ColorUtils.getGreen("4123"));
		TestCase.assertEquals("33", ColorUtils.getBlue("4123"));
		TestCase.assertEquals("44", ColorUtils.getAlpha("4123"));

		TestCase.assertEquals("11", ColorUtils.getRed("#123"));
		TestCase.assertEquals("22", ColorUtils.getGreen("#123"));
		TestCase.assertEquals("33", ColorUtils.getBlue("#123"));
		TestCase.assertNull(ColorUtils.getAlpha("#123"));
		TestCase.assertEquals("11", ColorUtils.getRed("#4123"));
		TestCase.assertEquals("22", ColorUtils.getGreen("#4123"));
		TestCase.assertEquals("33", ColorUtils.getBlue("#4123"));
		TestCase.assertEquals("44", ColorUtils.getAlpha("#4123"));

		TestCase.assertEquals("11", ColorUtils.getRed("112233"));
		TestCase.assertEquals("22", ColorUtils.getGreen("112233"));
		TestCase.assertEquals("33", ColorUtils.getBlue("112233"));
		TestCase.assertNull(ColorUtils.getAlpha("112233"));
		TestCase.assertEquals("11", ColorUtils.getRed("44112233"));
		TestCase.assertEquals("22", ColorUtils.getGreen("44112233"));
		TestCase.assertEquals("33", ColorUtils.getBlue("44112233"));
		TestCase.assertEquals("44", ColorUtils.getAlpha("44112233"));

		TestCase.assertEquals("11", ColorUtils.getRed("#112233"));
		TestCase.assertEquals("22", ColorUtils.getGreen("#112233"));
		TestCase.assertEquals("33", ColorUtils.getBlue("#112233"));
		TestCase.assertNull(ColorUtils.getAlpha("#112233"));
		TestCase.assertEquals("11", ColorUtils.getRed("#44112233"));
		TestCase.assertEquals("22", ColorUtils.getGreen("#44112233"));
		TestCase.assertEquals("33", ColorUtils.getBlue("#44112233"));
		TestCase.assertEquals("44", ColorUtils.getAlpha("#44112233"));

		TestCase.assertEquals(0, ColorUtils.getRed(-16711936));
		TestCase.assertEquals(255, ColorUtils.getGreen(-16711936));
		TestCase.assertEquals(0, ColorUtils.getBlue(-16711936));
		TestCase.assertEquals(255, ColorUtils.getAlpha(-16711936));

		TestCase.assertEquals(0, ColorUtils.getRed(0xFF00FF00));
		TestCase.assertEquals(255, ColorUtils.getGreen(0xff00ff00));
		TestCase.assertEquals(0, ColorUtils.getBlue(0xFF00FF00));
		TestCase.assertEquals(255, ColorUtils.getAlpha(0xff00ff00));

		TestCase.assertEquals(0, ColorUtils.getRed(65280));
		TestCase.assertEquals(255, ColorUtils.getGreen(65280));
		TestCase.assertEquals(0, ColorUtils.getBlue(65280));
		TestCase.assertEquals(0, ColorUtils.getAlpha(65280));

		TestCase.assertEquals(0, ColorUtils.getRed(0x00FF00));
		TestCase.assertEquals(255, ColorUtils.getGreen(0x00ff00));
		TestCase.assertEquals(0, ColorUtils.getBlue(0x00FF00));
		TestCase.assertEquals(0, ColorUtils.getAlpha(0x00ff00));

		TestCase.assertEquals(65280, ColorUtils.toColor(ColorUtils.toRGB("00"),
				ColorUtils.toRGB("FF"), ColorUtils.toRGB("00")));
		TestCase.assertEquals(-16711936,
				ColorUtils.toColorWithAlpha(ColorUtils.toRGB("00"),
						ColorUtils.toRGB("FF"), ColorUtils.toRGB("00")));
		TestCase.assertEquals(-16711936,
				ColorUtils.toColorWithAlpha(ColorUtils.toRGB("00"),
						ColorUtils.toRGB("ff"), ColorUtils.toRGB("00"),
						ColorUtils.toRGB("fF")));

		TestCase.assertEquals("#A0B0C0", ColorUtils.toColor("A0", "B0", "C0"));
		TestCase.assertEquals("#FFA0B0C0",
				ColorUtils.toColorWithAlpha("A0", "B0", "C0"));
		TestCase.assertEquals("#A0B0C0",
				ColorUtils.toColorShorthand("A0", "B0", "C0"));
		TestCase.assertEquals("#ABC",
				ColorUtils.toColorShorthand("AA", "BB", "CC"));
		TestCase.assertEquals("#FFA0B0C0",
				ColorUtils.toColorShorthandWithAlpha("A0", "B0", "C0"));
		TestCase.assertEquals("#FABC",
				ColorUtils.toColorShorthandWithAlpha("AA", "BB", "CC"));
		TestCase.assertEquals("#D0A0B0C0",
				ColorUtils.toColorWithAlpha("A0", "B0", "C0", "D0"));
		TestCase.assertEquals("#D0A0B0C0",
				ColorUtils.toColorShorthandWithAlpha("A0", "B0", "C0", "D0"));
		TestCase.assertEquals("#D0AABBCC",
				ColorUtils.toColorShorthandWithAlpha("AA", "BB", "CC", "D0"));
		TestCase.assertEquals("#DABC",
				ColorUtils.toColorShorthandWithAlpha("AA", "BB", "CC", "DD"));

		TestCase.assertEquals("#a0b0c0", ColorUtils.toColor("a0", "b0", "c0"));
		TestCase.assertEquals("#ffa0b0c0",
				ColorUtils.toColorWithAlpha("a0", "b0", "c0"));
		TestCase.assertEquals("#a0b0c0",
				ColorUtils.toColorShorthand("a0", "b0", "c0"));
		TestCase.assertEquals("#abc",
				ColorUtils.toColorShorthand("aa", "bb", "cc"));
		TestCase.assertEquals("#ffa0b0c0",
				ColorUtils.toColorShorthandWithAlpha("a0", "b0", "c0"));
		TestCase.assertEquals("#fabc",
				ColorUtils.toColorShorthandWithAlpha("aa", "bb", "cc"));
		TestCase.assertEquals("#d0a0b0c0",
				ColorUtils.toColorWithAlpha("a0", "b0", "c0", "d0"));
		TestCase.assertEquals("#d0a0b0c0",
				ColorUtils.toColorShorthandWithAlpha("a0", "b0", "c0", "d0"));
		TestCase.assertEquals("#d0aabbcc",
				ColorUtils.toColorShorthandWithAlpha("aa", "bb", "cc", "d0"));
		TestCase.assertEquals("#dabc",
				ColorUtils.toColorShorthandWithAlpha("aa", "bb", "cc", "dd"));

		TestCase.assertEquals("10a0d1", ColorUtils.shorthandHex("10a0d1"));
		TestCase.assertEquals("#10a0d1", ColorUtils.shorthandHex("#10a0d1"));
		TestCase.assertEquals("0D0A0B0C", ColorUtils.shorthandHex("0D0A0B0C"));
		TestCase.assertEquals("#0D0a0B0c",
				ColorUtils.shorthandHex("#0D0a0B0c"));
		TestCase.assertEquals("1ad", ColorUtils.shorthandHex("11aadd"));
		TestCase.assertEquals("#1aD", ColorUtils.shorthandHex("#11aADd"));
		TestCase.assertEquals("DABC", ColorUtils.shorthandHex("DDAABBCC"));
		TestCase.assertEquals("#dAbC", ColorUtils.shorthandHex("#dDAabBCc"));

		TestCase.assertEquals("10a0d1",
				ColorUtils.expandShorthandHex("10a0d1"));
		TestCase.assertEquals("#10a0d1",
				ColorUtils.expandShorthandHex("#10a0d1"));
		TestCase.assertEquals("0D0A0B0C",
				ColorUtils.expandShorthandHex("0D0A0B0C"));
		TestCase.assertEquals("#0D0a0B0c",
				ColorUtils.expandShorthandHex("#0D0a0B0c"));
		TestCase.assertEquals("11aadd", ColorUtils.expandShorthandHex("1ad"));
		TestCase.assertEquals("#11aaDD", ColorUtils.expandShorthandHex("#1aD"));
		TestCase.assertEquals("DDAABBCC",
				ColorUtils.expandShorthandHex("DABC"));
		TestCase.assertEquals("#ddAAbbCC",
				ColorUtils.expandShorthandHex("#dAbC"));

		TestCase.assertEquals("10", ColorUtils.shorthandHexSingle("10"));
		TestCase.assertEquals("0A", ColorUtils.shorthandHexSingle("0A"));
		TestCase.assertEquals("d", ColorUtils.shorthandHexSingle("dd"));
		TestCase.assertEquals("c", ColorUtils.shorthandHexSingle("cC"));
		TestCase.assertEquals("A", ColorUtils.shorthandHexSingle("Aa"));
		TestCase.assertEquals("B", ColorUtils.shorthandHexSingle("BB"));

		TestCase.assertEquals("10", ColorUtils.expandShorthandHexSingle("10"));
		TestCase.assertEquals("0A", ColorUtils.expandShorthandHexSingle("0A"));
		TestCase.assertEquals("dd", ColorUtils.expandShorthandHexSingle("d"));
		TestCase.assertEquals("CC", ColorUtils.expandShorthandHexSingle("C"));

		float[] hsl = ColorUtils.toHSL(0, 0, 0);
		TestCase.assertEquals(0.0f, hsl[0]);
		TestCase.assertEquals(0.0f, hsl[1]);
		TestCase.assertEquals(0.0f, hsl[2]);

		float[] arithmeticRGB = ColorUtils.toArithmeticRGB(0.0f, 0.0f, 0.0f);
		TestCase.assertEquals(ColorUtils.toArithmeticRGB(0), arithmeticRGB[0]);
		TestCase.assertEquals(ColorUtils.toArithmeticRGB(0), arithmeticRGB[1]);
		TestCase.assertEquals(ColorUtils.toArithmeticRGB(0), arithmeticRGB[2]);

		hsl = ColorUtils.toHSL(255, 0, 0);
		TestCase.assertEquals(0.0f, hsl[0]);
		TestCase.assertEquals(1.0f, hsl[1]);
		TestCase.assertEquals(0.5f, hsl[2]);

		arithmeticRGB = ColorUtils.toArithmeticRGB(0.0f, 1.0f, 0.5f);
		TestCase.assertEquals(ColorUtils.toArithmeticRGB(255),
				arithmeticRGB[0]);
		TestCase.assertEquals(ColorUtils.toArithmeticRGB(0), arithmeticRGB[1]);
		TestCase.assertEquals(ColorUtils.toArithmeticRGB(0), arithmeticRGB[2]);

		hsl = ColorUtils.toHSL(0, 255, 0);
		TestCase.assertEquals(120.0f, hsl[0]);
		TestCase.assertEquals(1.0f, hsl[1]);
		TestCase.assertEquals(0.5f, hsl[2]);

		arithmeticRGB = ColorUtils.toArithmeticRGB(120.0f, 1.0f, 0.5f);
		TestCase.assertEquals(ColorUtils.toArithmeticRGB(0), arithmeticRGB[0]);
		TestCase.assertEquals(ColorUtils.toArithmeticRGB(255),
				arithmeticRGB[1]);
		TestCase.assertEquals(ColorUtils.toArithmeticRGB(0), arithmeticRGB[2]);

		hsl = ColorUtils.toHSL(0, 0, 255);
		TestCase.assertEquals(240.0f, hsl[0]);
		TestCase.assertEquals(1.0f, hsl[1]);
		TestCase.assertEquals(0.5f, hsl[2]);

		arithmeticRGB = ColorUtils.toArithmeticRGB(240.0f, 1.0f, 0.5f);
		TestCase.assertEquals(ColorUtils.toArithmeticRGB(0), arithmeticRGB[0]);
		TestCase.assertEquals(ColorUtils.toArithmeticRGB(0), arithmeticRGB[1]);
		TestCase.assertEquals(ColorUtils.toArithmeticRGB(255),
				arithmeticRGB[2]);

		hsl = ColorUtils.toHSL(255, 255, 255);
		TestCase.assertEquals(0.0f, hsl[0]);
		TestCase.assertEquals(0.0f, hsl[1]);
		TestCase.assertEquals(1.0f, hsl[2]);

		arithmeticRGB = ColorUtils.toArithmeticRGB(0.0f, 0.0f, 1.0f);
		TestCase.assertEquals(ColorUtils.toArithmeticRGB(255),
				arithmeticRGB[0]);
		TestCase.assertEquals(ColorUtils.toArithmeticRGB(255),
				arithmeticRGB[1]);
		TestCase.assertEquals(ColorUtils.toArithmeticRGB(255),
				arithmeticRGB[2]);

		hsl = ColorUtils.toHSL(200, 165, 10);
		TestCase.assertEquals(48.94737f, hsl[0]);
		TestCase.assertEquals(0.9047619f, hsl[1]);
		TestCase.assertEquals(0.4117647f, hsl[2]);

		int[] rgb = ColorUtils.toRGB(48.94737f, 0.9047619f, 0.4117647f);
		TestCase.assertEquals(200, rgb[0]);
		TestCase.assertEquals(165, rgb[1]);
		TestCase.assertEquals(10, rgb[2]);

		hsl = ColorUtils.toHSL(52, 113, 82);
		TestCase.assertEquals(149.50821f, hsl[0]);
		TestCase.assertEquals(0.36969694f, hsl[1]);
		TestCase.assertEquals(0.32352942f, hsl[2]);

		rgb = ColorUtils.toRGB(149.50821f, 0.36969694f, 0.32352942f);
		TestCase.assertEquals(52, rgb[0]);
		TestCase.assertEquals(113, rgb[1]);
		TestCase.assertEquals(82, rgb[2]);*/
	});
});