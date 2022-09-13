import { ColorConstants } from "./ColorConstants";
import { ColorUtils } from "./ColorUtils";

/**
 * Color representation with support for hex, RBG, arithmetic RBG, HSL, and
 * integer colors
 *
 * @author osbornb
 */
export class Color {

    /**
     * Red arithmetic color value
     */
    private red = 0.0;

    /**
     * Green arithmetic color value
     */
    private green = 0.0;

    /**
     * Blue arithmetic color value
     */
    private blue = 0.0;

    /**
     * Opacity arithmetic value
     */
    private opacity = 1.0;

    /**
     * Create a black color
     *
     * @return color
     */
    public static black(): Color {
        return color(ColorConstants.BLACK);
    }

    /**
     * Create a blue color
     *
     * @return color
     */
    public static blue(): Color {
        return color(ColorConstants.BLUE);
    }

    /**
     * Create a brown color
     *
     * @return color
     */
    public static brown(): Color {
        return color(ColorConstants.BROWN);
    }

    /**
     * Create a cyan color
     *
     * @return color
     */
    public static cyan(): Color {
        return color(ColorConstants.CYAN);
    }

    /**
     * Create a dark gray color
     *
     * @return color
     */
    public static darkGray(): Color {
        return color(ColorConstants.DKGRAY);
    }

    /**
     * Create a gray color
     *
     * @return color
     */
    public static gray(): Color {
        return color(ColorConstants.GRAY);
    }

    /**
     * Create a green color
     *
     * @return color
     */
    public static green(): Color {
        return color(ColorConstants.GREEN);
    }

    /**
     * Create a light gray color
     *
     * @return color
     */
    public static lightGray(): Color {
        return color(ColorConstants.LTGRAY);
    }

    /**
     * Create a magenta color
     *
     * @return color
     */
    public static magenta(): Color {
        return color(ColorConstants.MAGENTA);
    }

    /**
     * Create an orange color
     *
     * @return color
     */
    public static orange(): Color {
        return color(ColorConstants.ORANGE);
    }

    /**
     * Create a pink color
     *
     * @return color
     */
    public static pink(): Color {
        return color(ColorConstants.PINK);
    }

    /**
     * Create a purple color
     *
     * @return color
     */
    public static purple(): Color {
        return color(ColorConstants.PURPLE);
    }

    /**
     * Create a red color
     *
     * @return color
     */
    public static red(): Color {
        return color(ColorConstants.RED);
    }

    /**
     * Create a violet color
     *
     * @return color
     */
    public static violet(): Color {
        return color(ColorConstants.VIOLET);
    }

    /**
     * Create a white color
     *
     * @return color
     */
    public static white(): Color {
        return color(ColorConstants.WHITE);
    }

    /**
     * Create a yellow color
     *
     * @return color
     */
    public static yellow(): Color {
        return color(ColorConstants.YELLOW);
    }

    /**
     * Create the color in hex
     *
     * @param color
     *            hex color in format #RRGGBB, RRGGBB, #RGB, RGB, #AARRGGBB,
     *            AARRGGBB, #ARGB, or ARGB
     * @return color
     */
    public static color(color: string): Color {
        return new Color(color);
    }

    /**
     * Create the color in hex with an opacity
     *
     * @param color
     *            hex color in format #RRGGBB, RRGGBB, #RGB, RGB, #AARRGGBB,
     *            AARRGGBB, #ARGB, or ARGB
     * @param opacity
     *            opacity float inclusively between 0.0 and 1.0
     * @return color
     */
    public static color(color: string, opacity: number): Color {
        return new Color(color, opacity);
    }

    /**
     * Create the color in hex with an alpha
     *
     * @param color
     *            hex color in format #RRGGBB, RRGGBB, #RGB, RGB, #AARRGGBB,
     *            AARRGGBB, #ARGB, or ARGB
     * @param alpha
     *            alpha integer color inclusively between 0 and 255
     * @return color
     */
    public static color(color: string, alpha: number): Color {
        return new Color(color, alpha);
    }

    /**
     * Create the color with individual hex colors
     *
     * @param red
     *            red hex color in format RR
     * @param green
     *            green hex color in format GG
     * @param blue
     *            blue hex color in format BB
     * @return color
     */
    public static color(red: string, green: string, blue: string): Color {
        return new Color(red, green, blue);
    }

    /**
     * Create the color with individual hex colors and alpha
     *
     * @param red
     *            red hex color in format RR
     * @param green
     *            green hex color in format GG
     * @param blue
     *            blue hex color in format BB
     * @param alpha
     *            alpha hex color in format AA
     * @return color
     */
    public static color(red: string, green: string, blue: string,
        alpha: string): Color {
        return new Color(red, green, blue, alpha);
    }

    /**
     * Create the color with individual hex colors and opacity
     *
     * @param red
     *            red hex color in format RR
     * @param green
     *            green hex color in format GG
     * @param blue
     *            blue hex color in format BB
     * @param opacity
     *            opacity float inclusively between 0.0 and 1.0
     * @return color
     */
    public static color(red: string, green: string, blue: string,
        opacity: number): Color {
        return new Color(red, green, blue, opacity);
    }

    /**
     * Create the color with RGB values
     *
     * @param red
     *            red integer color inclusively between 0 and 255
     * @param green
     *            green integer color inclusively between 0 and 255
     * @param blue
     *            blue integer color inclusively between 0 and 255
     * @return color
     */
    public static color(red: number, green: number, blue: number): Color {
        return new Color(red, green, blue);
    }

    /**
     * Create the color with RGBA values
     *
     * @param red
     *            red integer color inclusively between 0 and 255
     * @param green
     *            green integer color inclusively between 0 and 255
     * @param blue
     *            blue integer color inclusively between 0 and 255
     * @param alpha
     *            alpha integer color inclusively between 0 and 255
     * @return color
     */
    public static color(red: number, green: number, blue: number, alpha: number): Color {
        return new Color(red, green, blue, alpha);
    }

    /**
     * Create the color with RGBA values
     *
     * @param red
     *            red integer color inclusively between 0 and 255
     * @param green
     *            green integer color inclusively between 0 and 255
     * @param blue
     *            blue integer color inclusively between 0 and 255
     * @param opacity
     *            opacity float inclusively between 0.0 and 1.0
     * @return color
     */
    public static color(red: number, green: number, blue: number, opacity: number): Color {
        return new Color(red, green, blue, opacity);
    }

    /**
     * Create the color with arithmetic RGB values
     *
     * @param red
     *            red float color inclusively between 0.0 and 1.0
     * @param green
     *            green float color inclusively between 0.0 and 1.0
     * @param blue
     *            blue float color inclusively between 0.0 and 1.0
     * @return color
     */
    public static color(red: number, green: number, blue: number): Color {
        return new Color(red, green, blue);
    }

    /**
     * Create the color with arithmetic RGB values
     *
     * @param red
     *            red float color inclusively between 0.0 and 1.0
     * @param green
     *            green float color inclusively between 0.0 and 1.0
     * @param blue
     *            blue float color inclusively between 0.0 and 1.0
     * @param opacity
     *            opacity float inclusively between 0.0 and 1.0
     * @return color
     */
    public static color(red: number, green: number, blue: number,
        opacity: number): Color {
        return new Color(red, green, blue, opacity);
    }

    /**
     * Create the color with HSL (hue, saturation, lightness) or HSL (alpha)
     * values
     *
     * @param hsl
     *            HSL array where: 0 = hue, 1 = saturation, 2 = lightness,
     *            optional 3 = alpha
     * @return color
     */
    public static color(hsl: number[]): Color {
        return new Color(hsl);
    }

    /**
     * Create the color with HSLA (hue, saturation, lightness, alpha) values
     *
     * @param hsl
     *            HSL array where: 0 = hue, 1 = saturation, 2 = lightness
     * @param alpha
     *            alpha inclusively between 0.0 and 1.0
     * @return color
     */
    public static color(hsl: number[], alpha: number): Color {
        return new Color(hsl, alpha);
    }

    /**
     * Create the color as a single integer
     *
     * @param color
     *            color integer
     * @return color
     */
    public static color(color: number): Color {
        return new Color(color);
    }

    /**
     * Default color constructor, opaque black
     */
    constructor() {

    }

    /**
     * Create the color in hex
     *
     * @param color
     *            hex color in format #RRGGBB, RRGGBB, #RGB, RGB, #AARRGGBB,
     *            AARRGGBB, #ARGB, or ARGB
     */
    constructor(String color) {
        setColor(color);
    }

    /**
     * Create the color in hex with an opacity
     *
     * @param color
     *            hex color in format #RRGGBB, RRGGBB, #RGB, RGB, #AARRGGBB,
     *            AARRGGBB, #ARGB, or ARGB
     * @param opacity
     *            opacity float inclusively between 0.0 and 1.0
     */
    public Color(String color, float opacity) {
        setColor(color, opacity);
    }

    /**
     * Create the color in hex with an alpha
     *
     * @param color
     *            hex color in format #RRGGBB, RRGGBB, #RGB, RGB, #AARRGGBB,
     *            AARRGGBB, #ARGB, or ARGB
     * @param alpha
     *            alpha integer color inclusively between 0 and 255
     */
    public Color(String color, int alpha) {
        setColor(color, alpha);
    }

    /**
     * Create the color with individual hex colors
     *
     * @param red
     *            red hex color in format RR
     * @param green
     *            green hex color in format GG
     * @param blue
     *            blue hex color in format BB
     */
    public Color(String red, String green, String blue) {
        setColor(red, green, blue);
    }

    /**
     * Create the color with individual hex colors and alpha
     *
     * @param red
     *            red hex color in format RR
     * @param green
     *            green hex color in format GG
     * @param blue
     *            blue hex color in format BB
     * @param alpha
     *            alpha hex color in format AA
     */
    public Color(String red, String green, String blue, String alpha) {
        setColor(red, green, blue, alpha);
    }

    /**
     * Create the color with individual hex colors and opacity
     *
     * @param red
     *            red hex color in format RR
     * @param green
     *            green hex color in format GG
     * @param blue
     *            blue hex color in format BB
     * @param opacity
     *            opacity float inclusively between 0.0 and 1.0
     */
    public Color(String red, String green, String blue, float opacity) {
        setColor(red, green, blue, opacity);
    }

    /**
     * Create the color with RGB values
     *
     * @param red
     *            red integer color inclusively between 0 and 255
     * @param green
     *            green integer color inclusively between 0 and 255
     * @param blue
     *            blue integer color inclusively between 0 and 255
     */
    public Color(int red, int green, int blue) {
        setColor(red, green, blue);
    }

    /**
     * Create the color with RGBA values
     *
     * @param red
     *            red integer color inclusively between 0 and 255
     * @param green
     *            green integer color inclusively between 0 and 255
     * @param blue
     *            blue integer color inclusively between 0 and 255
     * @param alpha
     *            alpha integer color inclusively between 0 and 255
     */
    public Color(int red, int green, int blue, int alpha) {
        setColor(red, green, blue, alpha);
    }

    /**
     * Create the color with RGBA values
     *
     * @param red
     *            red integer color inclusively between 0 and 255
     * @param green
     *            green integer color inclusively between 0 and 255
     * @param blue
     *            blue integer color inclusively between 0 and 255
     * @param opacity
     *            opacity float inclusively between 0.0 and 1.0
     */
    public Color(int red, int green, int blue, float opacity) {
        setColor(red, green, blue, opacity);
    }

    /**
     * Create the color with arithmetic RGB values
     *
     * @param red
     *            red float color inclusively between 0.0 and 1.0
     * @param green
     *            green float color inclusively between 0.0 and 1.0
     * @param blue
     *            blue float color inclusively between 0.0 and 1.0
     */
    public Color(float red, float green, float blue) {
        setColor(red, green, blue);
    }

    /**
     * Create the color with arithmetic RGB values
     *
     * @param red
     *            red float color inclusively between 0.0 and 1.0
     * @param green
     *            green float color inclusively between 0.0 and 1.0
     * @param blue
     *            blue float color inclusively between 0.0 and 1.0
     * @param opacity
     *            opacity float inclusively between 0.0 and 1.0
     */
    public Color(float red, float green, float blue, float opacity) {
        setColor(red, green, blue, opacity);
    }

    /**
     * Create the color with HSL (hue, saturation, lightness) or HSL (alpha)
     * values
     *
     * @param hsl
     *            HSL array where: 0 = hue, 1 = saturation, 2 = lightness,
     *            optional 3 = alpha
     */
    public Color(float[] hsl) {
        if (hsl.length > 3) {
            setColorByHSL(hsl[0], hsl[1], hsl[2], hsl[3]);
        } else {
            setColorByHSL(hsl[0], hsl[1], hsl[2]);
        }
    }

    /**
     * Create the color with HSLA (hue, saturation, lightness, alpha) values
     *
     * @param hsl
     *            HSL array where: 0 = hue, 1 = saturation, 2 = lightness
     * @param alpha
     *            alpha inclusively between 0.0 and 1.0
     */
    public Color(float[] hsl, float alpha) {
        setColorByHSL(hsl[0], hsl[1], hsl[2], alpha);
    }

    /**
     * Create the color as a single integer
     *
     * @param color
     *            color integer
     */
    public Color(int color) {
        setColor(color);
    }

    /**
     * Copy constructor
     *
     * @param color
     *            color to copy
     */
    constructor(color: Color) {
        this.red = color.red;
        this.green = color.green;
        this.blue = color.blue;
        this.opacity = color.opacity;
    }

    /**
     * Set the color in hex
     *
     * @param color
     *            hex color in format #RRGGBB, RRGGBB, #RGB, RGB, #AARRGGBB,
     *            AARRGGBB, #ARGB, or ARGB
     */
    public setColor(color: string) {
        this.setRed(ColorUtils.getRed(color));
        this.setGreen(ColorUtils.getGreen(color));
        this.setBlue(ColorUtils.getBlue(color));
        const alpha = ColorUtils.getAlpha(color);
        if (alpha != null) {
            this.setAlpha(alpha);
        }
    }

    /**
     * Set the color in hex with an opacity
     *
     * @param color
     *            hex color in format #RRGGBB, RRGGBB, #RGB, RGB, #AARRGGBB,
     *            AARRGGBB, #ARGB, or ARGB
     * @param opacity
     *            opacity float inclusively between 0.0 and 1.0
     */
    public setColor(color: string, opacity: number) {
        this.setColor(color);
        this.setOpacity(opacity);
    }

    /**
     * Set the color in hex with an alpha
     *
     * @param color
     *            hex color in format #RRGGBB, RRGGBB, #RGB, RGB, #AARRGGBB,
     *            AARRGGBB, #ARGB, or ARGB
     * @param alpha
     *            alpha integer color inclusively between 0 and 255
     */
    public setColor(color: string, alpha: number) {
        this.setColor(color);
        this.setAlpha(alpha);
    }

    /**
     * Set the color with individual hex colors
     *
     * @param red
     *            red hex color in format RR
     * @param green
     *            green hex color in format GG
     * @param blue
     *            blue hex color in format BB
     */
    public setColor(red: string, green: string, blue: string) {
        this.setRed(red);
        this.setGreen(green);
        this.setBlue(blue);
    }

    /**
     * Set the color with individual hex colors and alpha
     *
     * @param red
     *            red hex color in format RR
     * @param green
     *            green hex color in format GG
     * @param blue
     *            blue hex color in format BB
     * @param alpha
     *            alpha hex color in format AA
     */
    public setColor(red: string, green: string, blue: string, alpha: string) {
        this.setColor(red, green, blue);
        this.setAlpha(alpha);
    }

    /**
     * Set the color with individual hex colors and opacity
     *
     * @param red
     *            red hex color in format RR
     * @param green
     *            green hex color in format GG
     * @param blue
     *            blue hex color in format BB
     * @param opacity
     *            opacity float inclusively between 0.0 and 1.0
     */
    public setColor(red: string, green: string, blue: string, opacity: number) {
        this.setColor(red, green, blue);
        this.setOpacity(opacity);
    }

    /**
     * Set the color with RGB values
     *
     * @param red
     *            red integer color inclusively between 0 and 255
     * @param green
     *            green integer color inclusively between 0 and 255
     * @param blue
     *            blue integer color inclusively between 0 and 255
     */
    public setColor(red: number, green: number, blue: number) {
        this.setRed(red);
        this.setGreen(green);
        this.setBlue(blue);
    }

    /**
     * Set the color with RGBA values
     *
     * @param red
     *            red integer color inclusively between 0 and 255
     * @param green
     *            green integer color inclusively between 0 and 255
     * @param blue
     *            blue integer color inclusively between 0 and 255
     * @param alpha
     *            alpha integer color inclusively between 0 and 255
     */
    public setColor(red: number, green: number, blue: number, alpha: number) {
        this.setColor(red, green, blue);
        this.setAlpha(alpha);
    }

    /**
     * Set the color with RGBA values
     *
     * @param red
     *            red integer color inclusively between 0 and 255
     * @param green
     *            green integer color inclusively between 0 and 255
     * @param blue
     *            blue integer color inclusively between 0 and 255
     * @param opacity
     *            opacity float inclusively between 0.0 and 1.0
     */
    public setColor(red: number, green: number, blue: number, opacity: number) {
        this.setColor(red, green, blue);
        this.setOpacity(opacity);
    }

    /**
     * Set the color with arithmetic RGB values
     *
     * @param red
     *            red float color inclusively between 0.0 and 1.0
     * @param green
     *            green float color inclusively between 0.0 and 1.0
     * @param blue
     *            blue float color inclusively between 0.0 and 1.0
     */
    public setColor(red: number, green: number, blue: number) {
        this.setRed(red);
        this.setGreen(green);
        this.setBlue(blue);
    }

    /**
     * Set the color with arithmetic RGB values
     *
     * @param red
     *            red float color inclusively between 0.0 and 1.0
     * @param green
     *            green float color inclusively between 0.0 and 1.0
     * @param blue
     *            blue float color inclusively between 0.0 and 1.0
     * @param opacity
     *            opacity float inclusively between 0.0 and 1.0
     */
    public setColor(red: number, green: number, blue: number, opacity: number) {
        this.setColor(red, green, blue);
        this.setOpacity(opacity);
    }

    /**
     * Set the color with HSL (hue, saturation, lightness) values
     *
     * @param hue
     *            hue value inclusively between 0.0 and 360.0
     * @param saturation
     *            saturation inclusively between 0.0 and 1.0
     * @param lightness
     *            lightness inclusively between 0.0 and 1.0
     */
    public setColorByHSL(float hue, float saturation, float lightness) {
        const arithmeticRGB = ColorUtils.toArithmeticRGB(hue, saturation,
            lightness);
        this.setRed(arithmeticRGB[0]);
        this.setGreen(arithmeticRGB[1]);
        this.setBlue(arithmeticRGB[2]);
    }

    /**
     * Set the color with HSLA (hue, saturation, lightness, alpha) values
     *
     * @param hue
     *            hue value inclusively between 0.0 and 360.0
     * @param saturation
     *            saturation inclusively between 0.0 and 1.0
     * @param lightness
     *            lightness inclusively between 0.0 and 1.0
     * @param alpha
     *            alpha inclusively between 0.0 and 1.0
     */
    public setColorByHSL(hue: number, saturation: number, lightness: number,
        alpha: number) {
        this.setColorByHSL(hue, saturation, lightness);
        this.setAlpha(alpha);
    }

    /**
     * Set the color as a single integer
     *
     * @param color
     *            color integer
     */
    public setColor(color: number) {
        this.setRed(ColorUtils.getRed(color));
        this.setGreen(ColorUtils.getGreen(color));
        this.setBlue(ColorUtils.getBlue(color));
        if (color > 16777215 || color < 0) {
            this.setAlpha(ColorUtils.getAlpha(color));
        }
    }

    /**
     * Set the red color in hex
     *
     * @param red
     *            red hex color in format RR or R
     */
    public setRed(red: string) {
        this.setRed(ColorUtils.toArithmeticRGB(red));
    }

    /**
     * Set the green color in hex
     *
     * @param green
     *            green hex color in format GG or G
     */
    public setGreen(green: string) {
        this.setGreen(ColorUtils.toArithmeticRGB(green));
    }

    /**
     * Set the blue color in hex
     *
     * @param blue
     *            blue hex color in format BB or B
     */
    public setBlue(blue: string) {
        this.setBlue(ColorUtils.toArithmeticRGB(blue));
    }

    /**
     * Set the alpha color in hex
     *
     * @param alpha
     *            alpha hex color in format AA or A
     */
    public setAlpha(alpha: string) {
        this.setOpacity(ColorUtils.toArithmeticRGB(alpha));
    }

    /**
     * Set the red color as an integer
     *
     * @param red
     *            red integer color inclusively between 0 and 255
     */
    public setRed(red: number) {
        this.setRed(ColorUtils.toHex(red));
    }

    /**
     * Set the green color as an integer
     *
     * @param green
     *            green integer color inclusively between 0 and 255
     */
    public setGreen(green: number) {
        this.setGreen(ColorUtils.toHex(green));
    }

    /**
     * Set the blue color as an integer
     *
     * @param blue
     *            blue integer color inclusively between 0 and 255
     */
    public setBlue(blue: number) {
        this.setBlue(ColorUtils.toHex(blue));
    }

    /**
     * Set the alpha color as an integer
     *
     * @param alpha
     *            alpha integer color inclusively between 0 and 255
     */
    public setAlpha(alpha: number) {
        this.setOpacity(ColorUtils.toArithmeticRGB(alpha));
    }

    /**
     * Set the red color as an arithmetic float
     *
     * @param red
     *            red float color inclusively between 0.0 and 1.0
     */
    public setRed(red: number) {
        ColorUtils.validateArithmeticRGB(red);
        this.red = red;
    }

    /**
     * Set the green color as an arithmetic float
     *
     * @param green
     *            green float color inclusively between 0.0 and 1.0
     */
    public setGreen(green: number) {
        ColorUtils.validateArithmeticRGB(green);
        this.green = green;
    }

    /**
     * Set the blue color as an arithmetic float
     *
     * @param blue
     *            blue float color inclusively between 0.0 and 1.0
     */
    public setBlue(blue: number) {
        ColorUtils.validateArithmeticRGB(blue);
        this.blue = blue;
    }

    /**
     * Set the opacity as an arithmetic float
     *
     * @param opacity
     *            opacity float color inclusively between 0.0 and 1.0
     */
    public setOpacity(opacity: number) {
        ColorUtils.validateArithmeticRGB(opacity);
        this.opacity = opacity;
    }

    /**
     * Set the alpha color as an arithmetic float
     *
     * @param alpha
     *            alpha float color inclusively between 0.0 and 1.0
     */
    public setAlpha(alpha: number) {
        this.setOpacity(alpha);
    }

    /**
     * Check if the color is opaque (opacity or alpha of 1.0, 255, or x00)
     *
     * @return true if opaque
     */
    public isOpaque(): boolean {
        return this.opacity == 1.0;
    }

    /**
     * Get the color as a hex string
     *
     * @return hex color in the format #RRGGBB
     */
    public getColorHex(): string {
        return ColorUtils.toColor(this.getRedHex(), this.getGreenHex(), this.getBlueHex());
    }

    /**
     * Get the color as a hex string with alpha
     *
     * @return hex color in the format #AARRGGBB
     */
    public getColorHexWithAlpha(): string {
        return ColorUtils.toColorWithAlpha(this.getRedHex(), this.getGreenHex(),
            this.getBlueHex(), this.getAlphaHex());
    }

    /**
     * Get the color as a hex string, shorthanded when possible
     *
     * @return hex color in the format #RGB or #RRGGBB
     */
    public getColorHexShorthand(): string {
        return ColorUtils.toColorShorthand(this.getRedHex(), this.getGreenHex(),
            this.getBlueHex());
    }

    /**
     * Get the color as a hex string with alpha, shorthanded when possible
     *
     * @return hex color in the format #ARGB or #AARRGGBB
     */
    public getColorHexShorthandWithAlpha(): string {
        return ColorUtils.toColorShorthandWithAlpha(this.getRedHex(), this.getGreenHex(),
            this.getBlueHex(), this.getAlphaHex());
    }

    /**
     * Get the color as an integer
     *
     * @return integer color
     */
    public getColor(): number {
        return ColorUtils.toColor(this.getRed(), this.getGreen(), this.getBlue());
    }

    /**
     * Get the color as an integer including the alpha
     *
     * @return integer color
     */
    public getColorWithAlpha(): number {
        return ColorUtils.toColorWithAlpha(this.getRed(), this.getGreen(), this.getBlue(),
            this.getAlpha());
    }

    /**
     * Get the red color in hex
     *
     * @return red hex color in format RR
     */
    public getRedHex(): string {
        return ColorUtils.toHex(this.red);
    }

    /**
     * Get the green color in hex
     *
     * @return green hex color in format GG
     */
    public getGreenHex(): string {
        return ColorUtils.toHex(this.green);
    }

    /**
     * Get the blue color in hex
     *
     * @return blue hex color in format BB
     */
    public getBlueHex(): string {
        return ColorUtils.toHex(this.blue);
    }

    /**
     * Get the alpha color in hex
     *
     * @return alpha hex color in format AA
     */
    public getAlphaHex(): string {
        return ColorUtils.toHex(this.opacity);
    }

    /**
     * Get the red color in hex, shorthand when possible
     *
     * @return red hex color in format R or RR
     */
    public getRedHexShorthand(): string {
        return ColorUtils.shorthandHexSingle(this.getRedHex());
    }

    /**
     * Get the green color in hex, shorthand when possible
     *
     * @return green hex color in format G or GG
     */
    public getGreenHexShorthand(): string {
        return ColorUtils.shorthandHexSingle(this.getGreenHex());
    }

    /**
     * Get the blue color in hex, shorthand when possible
     *
     * @return blue hex color in format B or BB
     */
    public getBlueHexShorthand(): string {
        return ColorUtils.shorthandHexSingle(this.getBlueHex());
    }

    /**
     * Get the alpha color in hex, shorthand when possible
     *
     * @return alpha hex color in format A or AA
     */
    public getAlphaHexShorthand(): string {
        return ColorUtils.shorthandHexSingle(this.getAlphaHex());
    }

    /**
     * Get the red color as an integer
     *
     * @return red integer color inclusively between 0 and 255
     */
    public getRed(): number {
        return ColorUtils.toRGB(this.red);
    }

    /**
     * Get the green color as an integer
     *
     * @return green integer color inclusively between 0 and 255
     */
    public getGreen(): number {
        return ColorUtils.toRGB(this.green);
    }

    /**
     * Get the blue color as an integer
     *
     * @return blue integer color inclusively between 0 and 255
     */
    public getBlue(): number {
        return ColorUtils.toRGB(this.blue);
    }

    /**
     * Get the alpha color as an integer
     *
     * @return alpha integer color inclusively between 0 and 255
     */
    public getAlpha(): number {
        return ColorUtils.toRGB(this.opacity);
    }

    /**
     * Get the red color as an arithmetic float
     *
     * @return red float color inclusively between 0.0 and 1.0
     */
    public getRedArithmetic(): number {
        return this.red;
    }

    /**
     * Get the green color as an arithmetic float
     *
     * @return green float color inclusively between 0.0 and 1.0
     */
    public getGreenArithmetic(): number {
        return this.green;
    }

    /**
     * Get the blue color as an arithmetic float
     *
     * @return blue float color inclusively between 0.0 and 1.0
     */
    public getBlueArithmetic(): number {
        return this.blue;
    }

    /**
     * Get the opacity as an arithmetic float
     *
     * @return opacity float inclusively between 0.0 and 1.0
     */
    public getOpacity(): number {
        return this.opacity;
    }

    /**
     * Get the alpha color as an arithmetic float
     *
     * @return alpha float color inclusively between 0.0 and 1.0
     */
    public getAlphaArithmetic(): number {
        return this.getOpacity();
    }

    /**
     * Get the HSL (hue, saturation, lightness) values
     *
     * @return HSL array where: 0 = hue, 1 = saturation, 2 = lightness
     */
    public getHSL(): number[] {
        return ColorUtils.toHSL(this.red, this.green, this.blue);
    }

    /**
     * Get the HSL hue value
     *
     * @return hue value
     */
    public getHue(): number {
        return this.getHSL()[0];
    }

    /**
     * Get the HSL saturation value
     *
     * @return saturation value
     */
    public getSaturation(): number {
        return this.getHSL()[1];
    }

    /**
     * Get the HSL lightness value
     *
     * @return lightness value
     */
    public getLightness(): number {
        return this.getHSL()[2];
    }

    /**
     * Copy the color
     *
     * @return color copy
     */
    public copy(): Color {
        return new Color(this);
    }

}