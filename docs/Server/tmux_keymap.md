---

category: Server

tags:

- server

- Linux

- Tmux

---

# tmux 常用键位

`prefix`键为`Ctrl+b`

表格中命令中省略了`tmux `前缀

## 会话管理

|快捷键|说明|命令|
|---|---|---|
|-|启动|`tmux`|
|-|创建命名会话|`new -s <session-name>`|
|`prefix d`|分离当前会话|`detach-client`|
|`prefix s`|列出所有会话|`choose-tree -Zs`|
|`prefix $`|重命名当前会话|`rename-session -t <session-name> <new-name>`|
|-|重新接入会话|`attach -t 0` 或 `a -t <session-name>`|
|-|杀死会话|`kill-session -t 0` 或 `kill-session -t <session-name>`|
|-|切换会话|`switch -t 0` 或 `switch -t <session-name>`|
|`prefix (`|切换上一个会话|`switch-client -p`|
|`prefix )`|切换下一个会话|`switch-client -n`|
|`prefix L`|切换到上一个活动会话|`switch-client -l`|
|`prefix r`|刷新会话|`refresh-client`|
|`prefix C-z`|挂起会话,`fg`回到挂起的进程|`suspend-client`|

## 窗口管理

|快捷键|说明|命令|
|---|---|---|
|`prefix c`|创建一个新窗口|`new-window`|
|`prefix p`|切换到上一个窗口|`previous-window`|
|`prefix l`|切换到上一个窗口|`last-window`|
|`prefix n`|切换到下一个窗口|`next-window`|
|`prefix <number>`|切换到指定编号的窗口|`select-window -t <number>`|
|`prefix '`|切换到指定编号的窗口(需要在命令区输入窗口编号)|`select-window -t <window-number>`|
|`prefix w`|从列表中选择窗口|`choose-tree -Zw`|
|`prefix .`|移动窗口|`move-window -t <number>`|
|`prefix ,`|窗口重命名|`rename-window <new-name>`|
|`prefix &`|确认后关闭窗口|`kill-window #W (y/n)`|
|`prefix f`|查找窗口|`find-window -Z -- <input>`|

## 窗格管理

|快捷键|说明|命令|
|---|---|---|
|`prefix %`|划分左右两个窗格|`split-window -h`|
|`prefix "`|划分上下两个窗格|`split-window`|
|`prefix <arrow key>`|光标用方向键切换到其他窗格|`select-pane -U` 参数:`-U`-向上,`-D`-向下,`-L`-向左,`-R`-向右|
|`prefix ;`|光标切换到上一个活动窗格|`last-pane`|
|`prefix o`|光标切换到下一个窗格|`select-pane -t :.+`|
|`prefix {`|当前窗格上移|`swap-pane -U`|
|`prefix }`|当前窗格下移|`swap-pane -D`|
|`prefix Ctrl+o`|旋转窗格|`rotate-window`|
|`prefix Alt+o`|反向旋转窗格|`rotate-window -D`|
|`prefix x`|关闭当前窗格|`kill-pane`|
|`prefix !`|将当前窗格拆分为一个独立窗口|`break-pane`|
|`prefix z`|当前窗格全屏显示，再使用一次会变回原来大小|`resize-pane -Z`|
|`prefix Ctrl+<arrow key>`|按箭头方向调整窗格大小|`resize-pane -U` 参数:`-U`-向上,`-D`-向下,`-L`-向左,`-R`-向右|
|`prefix q`|显示窗格编号|`display-panes`|
|`prefix Space`|切换下一种布局|`next-layout`|
|`prefix m`|选中窗格，再次按下取消选中|`select-pane -m`|
|`prefix M`|选择窗格(没用)|`select-pane -M`|

## 其它快捷键

|快捷键|说明|命令|
|---|---|---|
|`prefix C-b`|向窗口内发送prefix键的信息|`send-prefix`|
|`prefix t`|显示时钟|`clock-mode`|
|`prefix <`|显示菜单|`display-menu xxxxxx`|
|`prefix >`|显示菜单|`display-menu xxxxxx`|
|`prefix ?`|显示所有快捷键|`list-keys -N`|
|`prefix /`|显示输入的快捷键对应的命令|`list-keys -1N <key>`|
|`prefix :`|显示命令输入框|`command-prompt`|
|`prefix i`|显示当前信息|`display-message`|
|`prefix ~`|显示历史命令|`show-messages`|
|`prefix C`|查看自定义选项|`customize-mode -Z`|
|`prefix D`|选择客户端|`choose-client -Z`|
|`prefix DC`|选择客户端(未知)|`refresh-client -c`|
|`prefix E`|选择布局(没用)|`select-layout -E`|
|`prefix -`|delete-buffer(没找到buffer)|`delete-buffer`|
|`prefix #`|list-buffers(没找到buffer)|`list-buffers`|
|`prefix =`|choose-buffer(没找到buffer)|`choose-buffer -Z`|
|`prefix [`|进入复制模式|`copy-mode`|
|`prefix ]`|paste-buffer|`paste-buffer -p`|
|`prefix PPage`| |`copy-mode -u`|
|`prefix M-1`| |`select-layout even-horizontal`|
|`prefix M-2`| |`select-layout even-vertical`|
|`prefix M-3`| |`select-layout main-horizontal`|
|`prefix M-4`| |`select-layout main-vertical`|
|`prefix M-5`| |`select-layout tiled`|
|`prefix M-n`| |`next-window -a`|
|`prefix M-o`| |`rotate-window -D`|
|`prefix M-p`| |`previous-window -a`|
|`prefix M-Up`| |`resize-pane -U 5`|
|`prefix M-Down`| |`resize-pane -D 5`|
|`prefix M-Left`| |`resize-pane -L 5`|
|`prefix M-Right`| |`resize-pane -R 5`|
|`prefix C-Up`| |`resize-pane -U`|
|`prefix C-Down`| |`resize-pane -D`|
|`prefix C-Left`| |`resize-pane -L`|
|`prefix C-Right`| |`resize-pane -R`|
|`prefix S-Up`| |`refresh-client -U 10`|
|`prefix S-Down`| |`refresh-client -D 10`|
|`prefix S-Left`| |`refresh-client -L 10`|
|`prefix S-Right`| |`refresh-client -R 10`|

**NOTE** 说明为空的试不出来按键效果，`M`应该是`Alt`键，但在mac中键位冲突

## 其它命令

|命令|说明|
|---|---|
|`tmux list-keys`|列出所有快捷键，及其对应的 Tmux 命令|
|`tmux list-commands`|列出所有 Tmux 命令及其参数|
|`tmux info`|列出当前所有 Tmux 会话的信息|
|`tmux source-file ~/.tmux.conf`|重新加载当前的 Tmux 配置|
