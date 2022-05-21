# wget

[来源](https://www.hostinger.com/tutorials/wget-command-examples/)

# What Is the Wget Command and How to Use It (12 Examples Included)

This guide will show you how to use the **wget** command in Linux. We’ll also provide 12 useful wget command examples. By the end, you’ll know all about the wget command and will be able to use it to download files from the World Wide Web.

[Download eBook: Speed Up Your Website. 8 Practical Tips That Work](https://www.hostinger.com/tutorials/ebook/speed-up-your-website)

[What Is the Wget Command?](https://www.hostinger.com/tutorials/wget-command-examples/#What_Is_the_Wget_Command)[How to Install Wget?](https://www.hostinger.com/tutorials/wget-command-examples/#How_to_Install_Wget)[Wget Command Examples](https://www.hostinger.com/tutorials/wget-command-examples/#Wget_Command_Examples)[Using Wget Command to Download Single Files](https://www.hostinger.com/tutorials/wget-command-examples/#Using_Wget_Command_to_Download_Single_Files)[Using Wget Command to Download Multiple Files](https://www.hostinger.com/tutorials/wget-command-examples/#Using_Wget_Command_to_Download_Multiple_Files)[Using Wget Command to Get Files Under Different Names](https://www.hostinger.com/tutorials/wget-command-examples/#Using_Wget_Command_to_Get_Files_Under_Different_Names)[Using Wget Command to Save Files in Specified Directory](https://www.hostinger.com/tutorials/wget-command-examples/#Using_Wget_Command_to_Save_Files_in_Specified_Directory)[Using Wget Command to Limit Download Speed](https://www.hostinger.com/tutorials/wget-command-examples/#Using_Wget_Command_to_Limit_Download_Speed)[Using Wget Command to Set Retry Attempts](https://www.hostinger.com/tutorials/wget-command-examples/#Using_Wget_Command_to_Set_Retry_Attempts)[Using Wget Command to Download in Background](https://www.hostinger.com/tutorials/wget-command-examples/#Using_Wget_Command_to_Download_in_Background)[Using Wget Command to Download via FTP](https://www.hostinger.com/tutorials/wget-command-examples/#Using_Wget_Command_to_Download_via_FTP)[Using Wget Command to Continue Interrupted Downloads](https://www.hostinger.com/tutorials/wget-command-examples/#Using_Wget_Command_to_Continue_Interrupted_Downloads)[Using Wget Command to Retrieve Whole Websites](https://www.hostinger.com/tutorials/wget-command-examples/#Using_Wget_Command_to_Retrieve_Whole_Websites)[Using Wget Command to Locate Broken Links](https://www.hostinger.com/tutorials/wget-command-examples/#Using_Wget_Command_to_Locate_Broken_Links)[Using Wget Command to Download Numbered Files](https://www.hostinger.com/tutorials/wget-command-examples/#Using_Wget_Command_to_Download_Numbered_Files)

## What Is the Wget Command?

**Wget** is a computer tool created by the [GNU Project](https://www.gnu.org/). You can use it to retrieve content and files from various web servers. The name is a combination of **World Wide Web** and the word **get**. It supports downloads via FTP, SFTP, HTTP, and HTTPS.

Wget is created in portable C and usable on any Unix system. It’s also possible to implement on Mac OS X, Microsoft Windows, AmigaOS, and other popular platforms.

## How to Install Wget?

For this wget command demonstration, we’ll be using Ubuntu 16.04. But the syntax will work on any other Linux distribution too.

Firstly, [access your server via SSH](https://www.hostinger.com/tutorials/how-to-use-putty-ssh):

```
ssh user@your_server_ip -port
```

To install wget on **Ubuntu 18.04** or similar, execute the following command:

```
sudo apt-get install wget
```

To install wget on **CentOS 7** or it’s previous distros, use:

```
sudo yum install wget
```

Once the setup finishes, you’ll be ready to use it. Also, the knowledge of [basic SSH commands](https://www.hostinger.com/tutorials/ssh/basic-ssh-commands) can make things easier.

## Wget Command Examples

To get you started, we’ll provide 12 wget command examples that you can use for everyday tasks. Keep in mind that you may also call this function from scripts and [cron jobs](https://www.hostinger.com/tutorials/cron-job)!

### Using Wget Command to Download Single Files

One of the most basic wget command examples is downloading a single file and storing it on your current working directory. For example, you may get the latest version of WordPress by using the following:

```
wget https://wordpress.org/latest.zip
```

Here is the output that you will see:

```
--2018-02-23 12:53:10-- https://wordpress.org/latest.zip
Resolving wordpress.org (wordpress.org)... 198.143.164.252
Connecting to wordpress.org (wordpress.org)|198.143.164.252|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 9332728 (8,9M) [application/zip]
Saving to: 'latest.zip'

latest.zip 100%[===================>] 8,90M 6,88MB/s in 1,3s

2018-02-23 12:53:14 (6,88 MB/s) - 'latest.zip' saved [9332728/9332728]
```

In this example, a file named **latest.zip** will be downloaded in the current working directory. You’ll also see extra information, such the download progress, speed, size, time, and date.

### Using Wget Command to Download Multiple Files

We can take wget usage one step further and download multiple files at once. To do that, we will need to create a text document and place the download URLs there. In this example, we will retrieve the latest versions of [WordPress](https://www.hostinger.com/tutorials/wordpress), [Joomla](https://www.hostinger.com/tutorials/joomla/), and [Drupal](https://www.hostinger.com/tutorials/drupal) by using wget. Enter the following:

```
nano example.txt
```

This will create an example.txt file and open a text editor interface. Paste these links there:

```
https://wordpress.org/latest.zip

https://downloads.joomla.org/cms/joomla3/3-8-5/Joomla_3-8-5-Stable-Full_Package.zip

https://ftp.drupal.org/files/projects/drupal-8.4.5.zip
```

Once done, you may use **-i** to get all the files stored in your example text file:

```
wget -i example.txt
```

Wait for the process to finish and you’ll have the installations of three most popular content management systems.

### Using Wget Command to Get Files Under Different Names

In this wget example, we will save a file using a different name with the help of **-O** option:

```
wget -O wordpress-install.zip https://wordpress.org/latest.zip
```

In this case, the downloaded resource will be saved as **wordpress-install.zip** instead of it’s original name.

### Using Wget Command to Save Files in Specified Directory

You can utilize wget to place a file in another directory using **-P** function:

```
wget -P documents/archives/ https://wordpress.org/latest.zip
```

The file you retrieve using this syntax will appear in **documents/archives/** folder.

### Using Wget Command to Limit Download Speed

With wget, you can also limit the download speed. This is useful when retrieving huge files and will prevent it from using all of your bandwidth. This wget example will set the limit to 500k:

```
wget --limit-rate=500k https://wordpress.org/latest.zip
```

### Using Wget Command to Set Retry Attempts

Internet connection problems can cause your download to interrupt. To tackle this issue, we can increase the retry attempts using **-tries** function:

```
wget -tries=100 https://wordpress.org/latest.zip
```

### Using Wget Command to Download in Background

For extremely large files, you may take advantage of **-b** function. It will download your content in the background.

```
wget -b http://example.com/beefy-file.tar.gz
```

A **wget-log** will appear in your working directory, which can be used to check your download progress and status. This command will also do the trick:

```
tail -f wget-log
```

### Using Wget Command to Download via FTP

The command is also usable with FTP. You’ll only need to specify the username and password as in this wget example:

```
wget --ftp-user=YOUR_USERNAME --ftp-password=YOUR_PASSWORD ftp://example.com/something.tar
```

### Using Wget Command to Continue Interrupted Downloads

Your download can get interrupted if you lose the internet connection or experience a power outage. This is quite a common occurrence when getting huge files. Instead of starting over, it’s possible to continue the download using **-c** function:

```
wget -c https://example/very-big-file.zip
```

If you proceed without the **-c** function, the new file will have **.1** added at the end as it already exists.

### Using Wget Command to Retrieve Whole Websites

It is also possible to use wget command to download the content of an entire site. This will let you view it locally without an internet connection. Here is an example:

```
wget --mirror --convert-links --page-requisites --no-parent -P documents/websites/ https://some-website.com
```

Let’s analyze the ingredients of this wget command:

| **–mirror**                | It makes your download recursive.                            |
| -------------------------- | ------------------------------------------------------------ |
| **–convert-links**         | All links will be converted for proper offline usage.        |
| **–page-requisites**       | The following will include all necessary files such as CSS, JS, and images. |
| **–no-parent**             | It ensures that directories *above* the hierarchy are not retrieved. |
| **-P documents/websites/** | This ensures that all content goes to our specified directory. |

Once the process finishes, you’ll be able to open the downloaded website locally and find all the files in **documents/websites/** folder.

### Using Wget Command to Locate Broken Links

Let’s try something more advanced. We can use the wget command to locate all broken URLs that display 404 error on a specific website. Start by executing the following:

```
wget -o wget-log -r -l 5 --spider http://example.com
```

| **-o**      | Gathers output into a file for later use. |
| ----------- | ----------------------------------------- |
| **-l**      | Specifies the recursion level.            |
| **-r**      | Makes the download recursive.             |
| **–spider** | Sets wget to spider mode.                 |

We may now investigate the **wget-log** file to find the list of broken links. Here’s the command to do it:

```
grep -B 2 '404' wget-log | grep "http" | cut -d " " -f 4 | sort -u
```

### Using Wget Command to Download Numbered Files

If you have files or images numbered in a certain list, you may easily download all of them with the following syntax:

```
wget http://example.com/images/{1..50}.jpg
```

## Conclusion

Congratulations! By completing this tutorial you have learned various uses for the wget command. You can now utilize it to get single or multiple files. In addition, you’ve learned some advanced uses, such as downloading a whole website or locating broken URLs. For more information, you may also check the [official documentation](https://www.gnu.org/software/wget/manual/wget.html).

Are there any hidden tips or tricks that you want to share? Feel free to do so in the comments below!