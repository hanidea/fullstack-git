import ssl
import string
from urllib import request
from urllib.parse import quote


class HtmlDownloader(object):
    def download(self, url):
        if url is None:
            return None

        url_ = quote(url, safe=string.printable)
        ssl._create_default_https_context = ssl._create_unverified_context
        response = request.urlopen(url_)
        if response.getcode() != 200:
            return None

        return response.read()
