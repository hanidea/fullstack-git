import time
import requests
from bs4 import BeautifulSoup

#保存已经抓取和未抓取的链接
visited_urls = []
unvisited_urls = ["https://book.douban.com/subject/26986954/"]
#从队列中返回一个未抓取的URL
def get_unvisited_url():
    while True:
        if len(unvisited_urls)==0:
            return None

        url = unvisited_urls.pop()

        if url in visited_urls:
            continue

        visited_urls.append(url)
        return url
            
if __name__=="__main__":
    while True:
        url = get_unvisited_url()
        if url == None:
            break
        print("GET" + url)

        response = requests.get(url)
        content = response.content.decode("utf-8")

        soup = BeautifulSoup(content,"html.parser")
            # 获取当前页面包含的所有链接
        for element in soup.select("a"):
            if not element.has_attr("href"):
                continue
            if not element["href"].startswith("https://"):
                continue
            print(element["href"])
        time.sleep(1)