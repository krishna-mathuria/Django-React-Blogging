
from celery import shared_task
import base64
import re
from .models import Post
from django.core.files.base import ContentFile
import uuid
from django.shortcuts import get_object_or_404
import os
from django.core.files import File

# @shared_task
# def ConvertToImg(content,post_id):
#     img_data=re.findall("(?<=base64,)[^>]+>",content)
#     extensions=re.findall("png|jpeg|jpg",content)
#     if len(img_data) !=0:
#         img=img_data[0]
#         data=img[:-2]
#         newpost = Images()
#         image_data = base64.b64decode(data)
#         image_name = str(uuid.uuid4())+extensions[0]
#         newpost.image = ContentFile(image_data, image_name)
#         post = get_object_or_404(Post, slug=post_id)
#         newpost.post= post
#         newpost.save()
#     else:
#         newpost = Images()
#         post = get_object_or_404(Post, slug=post_id)
#         newpost.post= post
#         newpost.save()

@shared_task
def ConvertToImg(content,post_id):
    img_data=re.findall("(?<=base64,)[^>]+>",content)
    extensions=re.findall("png|jpeg|jpg",content)
    if len(img_data)!=0:
        img=img_data[0]
        data=img[:-2]
        data += '=' * (-len(data) % 4)
        post = get_object_or_404(Post, slug=post_id)
        image_data = base64.urlsafe_b64decode(data)
        image_name = str(uuid.uuid4())+"."+extensions[0]
        post.thumbnail = ContentFile(image_data, image_name)
        post.save()


