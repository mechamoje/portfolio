from django.db import models


class Project(models.Model):
    cover = models.ImageField(upload_to='portfolioapp/images/')
    title = models.CharField(max_length=180)
    demo = models.URLField(blank=True)
    github = models.URLField(blank=True)
    type = models.CharField(
        max_length=50, choices=[('game', 'game'), ('project', 'project')], default='project')

    def __str__(self):
        return self.title
