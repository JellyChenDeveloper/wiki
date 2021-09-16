# win10系统怎么将按住shift右键powershell修改为cmd

在win10系统中，我们如果在文件上按住shift键然后单击鼠标右键的话，显示的不是在cmd中打开，而是显示在powershell中打开，但是很多用户可能更习惯使用cmd，那么win10系统怎么将按住shift右键powershell修改为cmd呢？下面给大家带来具体的操作步骤。
![15627388723450](http://www.win7zhijia.cn/upload/20190710/15627388723450.png)

1. 其实和修改开始菜单上右键【powershell】选项的道理一样，右键点击开始按钮>设置>个性化>任务栏>取消默认的"Win+X替换为PowerShell"开启设置，通过该操作进行操作就可以让shift+右键powershell修改为cmd了！
![15627405665944](http://www.win7zhijia.cn/upload/20190710/15627405665944.png)
2. 如果不行打开注册表，依次展开：计算机`\HKEY_CLASSES_ROOT\Directory\Background\shell\cmd`
3. 将右侧项`HideBasedOnVelocityId`重命名为`ShowBasedOnVelocityId`，这样在文件资源管理器里Shift+右键弹出的菜单中就会显示“在此处打开命令窗口”了。注意，有的系统上要隐藏“在此处打开Powershell”才可以。
**注**：该位置系统默认所有者是TrustedInstaller，无法重命名则先给该文件设置权限；
4. 修改后直接点击原来的按钮就会显示cmd了！

以上给大家介绍的便是win10系统怎么将按住shift右键powershell修改为cmd的详细操作步骤，有需要的用户们可以采取上面的方法步骤来进行操作吧。
