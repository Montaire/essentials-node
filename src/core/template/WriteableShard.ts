import { Shard } from "./index.js";
import { RenderEngine } from "../render/index.js";
import { Request, Response } from "../index.js";
/**
 * Simple shader, which meant to be built from the outside.
 */
export default class WriteableShard implements Shard {

    /**
     * Write method will append to this.
     */
    protected content = '';

    /**
     * Appends text to the shard.
     *
     * @param text
     */
    write(text: string) {
        this.content += text;
    }

    toString(): string{
        return this.content;
    }

    /**
     * Override if there is an action needed after the shader is built. Like
     * buffering the input. The {@link this.content} should be processed.
     */
    ready(): void {

    }

    /**
     * Checks if the current shard is empty. 
     * If it is empty it can be skipped while rendering.
     * @returns
     */
    isEmpty():boolean {
        return this.content.length == 0;
    }

    /**
     * @param engine 
     * @param response 
     */
     render(engine: RenderEngine, request: Request, response: Response) {
        response.write(this.content);
    }
}