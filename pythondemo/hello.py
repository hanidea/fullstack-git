# import urllib.request
# import http.cookiejar
# url = "http://www.baidu.com"
# print ('第一种方法')
# response1 = urllib.request.urlopen(url)
# print (response1.getcode())
# print (len(response1.read()))
import time
import requests
from bs4 import BeautifulSoup
if __name__=="__main__":
    response = requests.get("https://book.douban.com/subject/26986954/")
    content = response.content.decode("utf-8")
    # print (content)
    soup = BeautifulSoup(content,"html.parser")
    # 获取当前页面包含的所有链接
    for element in soup.select("a"):
        if not element.has_attr("href"):
            continue
        if not element["href"].startswith("https://"):
            continue
        print(element["href"])
