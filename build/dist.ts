import * as fs from "fs";

async function main(): Promise<void>
{
    const FILES = [
        ".npmignore",
        "LICENSE",
        "package.json",
        "README.md"
    ];
    const ROOT = `${__dirname}/..`;
    const DIST = `${ROOT}/dist`;

    for (const file of FILES)
    {
        if (fs.existsSync(`${DIST}/${file}`) === true)
            await fs.promises.unlink(`${DIST}/${file}`);
        await fs.promises.link(`${ROOT}/${file}`, `${DIST}/${file}`);
    }
}
main();