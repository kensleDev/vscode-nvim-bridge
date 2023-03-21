# Vscode Neovim Bridge

This is a very simple plugin to expose certain VSCode API's to Neovim. 

## ✨Features

- Toast - simple custom notifications 

## 👨‍🏭Usage 

This extension is intended to run in the background and be called from other processes, here are some general examples of how to use it: 

### Via keybind

```
{
    "key": "ctrl+shift+alt+p",
    "command": "vscode-nvim-bridge.toast",
    "args": "Hello from neovim!, info"
}
```

or 

```
{
    "key": "ctrl+shift+alt+p",
    "command": "vscode-nvim-bridge.toast",
    "args": {
        "msg": "Testing!",
        "logLevel": "warning"
    }
}
```

### Via VSCode Neovim command mode

1. Enter command by pressing ':'

2. Enter the command:

```
:call VSCodeNotify("vscode-nvim-bridge.toast", "Hello from Neovim keybinds!, warning" )
```

### Via VSCode Neovim keybind

```
// init.lua

if vim.g.vscode then
    vim.keymap.set("n", "<leader>h", function()
        vim.cmd([[:call VSCodeNotify("vscode-nvim-bridge.toast", "Hello from Neovim keybinds!, warning" )]])
    end, { noremap = true, silent = true })
else
    -- Neovim mappings
end
```


## 🗺 API


### Commands

| command                        | info                                                             |
| ------------------------------ | ---------------------------------------------------------------- |
| ```vscode-nvim-bridge.toast``` | Displays a VSCode notification with the message provided  |
|                                |                                                                  |

### Functions

#### vscode-nvim-bridge.toast
| arg      | type                                 |
| -------- | ------------------------------------ |
| msg      | ``` string ```                       |
| logLevel | ``` info \|\| error \|\| warning ``` |
|          |                                      |


