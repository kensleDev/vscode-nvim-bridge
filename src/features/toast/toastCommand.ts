import * as vscode from 'vscode';
import { argParser } from '../../utils/argHelper';
import { toastSchema } from './toastSchema';

export let toastCommand = vscode.commands.registerCommand('vscode-nvim-bridge.toast', (args) => {
    args = argParser(args, toastSchema);

    const parseResult = toastSchema.safeParse(args);
    console.log({ parseResult });

    if (parseResult.success) {
        const { logLevel, msg } = parseResult.data;

        if (logLevel === 'info') {
            vscode.window.showInformationMessage(msg);
        } else if (logLevel === 'error') {
            vscode.window.showErrorMessage('Hello World from vscode-nvim-bridge!');
        } else if (logLevel === 'warning') {
            vscode.window.showWarningMessage('Hello World from vscode-nvim-bridge!');
        } else {
            vscode.window.showErrorMessage('Log level ' + logLevel + ' not recognised');
        }
    } else {
        // const { message } = parseResult.error;
        console.log({ error: parseResult.error });
        vscode.window.showErrorMessage(JSON.stringify(parseResult.error, null, 2));
    }
});
