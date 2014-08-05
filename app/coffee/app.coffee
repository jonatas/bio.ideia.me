angular
  .module('tania', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config ($routeProvider) ->
    $routeProvider
      .when '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      .when '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      .otherwise redirectTo: '/'

class Florest
  constructor: (canvas) ->
    @canvas = canvas
    @ctx = @canvas.getContext("2d")
    @W = window.innerWidth
    @H = window.innerHeight / 5
    @canvas.width = @W
    @canvas.height = @H
    @x = 0
    @numberOfTrees = 5
    @step = @W / @numberOfTrees * 0.75
    @init()
  init: (canvas) ->
    console.log("@x",@x)
    if @x < @numberOfTrees
      @x += 1
    else
      return
    @length = 12 + @x * 2
    @divergence = 15
    @reduction = 0.8
    @line_width = 3
    @trunk = {x: 10 + @x * @step, y: @length, angle: 90}
    @start_points = []
    @start_points.push(@trunk)
    @ctx.beginPath()
    @ctx.moveTo(@trunk.x, @H-5)
    @ctx.lineTo(@trunk.x, @H-@trunk.y)
    @ctx.strokeStyle = "brown"
    @ctx.lineWidth = @line_width
    @ctx.stroke()
    @branches()
  branches: ->
    @length = @length * @reduction
    @line_width = @line_width * @reduction

    @ctx.lineWidth = @line_width
    @new_start_points = []
    @ctx.beginPath()
    self = @
    for sp in @start_points
      ep1 = self.get_endpoint(sp.x, sp.y, sp.angle+self.divergence, self.length)
      ep2 = self.get_endpoint(sp.x, sp.y, sp.angle-self.divergence, self.length)
      self.ctx.moveTo(sp.x, self.H-sp.y)
      self.ctx.lineTo(ep1.x, self.H-ep1.y)
      self.ctx.moveTo( sp.x, self.H-sp.y)
      self.ctx.lineTo(ep2.x, self.H-ep2.y)
      ep1.angle = sp.angle+@divergence
      ep2.angle = sp.angle-@divergence
      @new_start_points.push(ep1)
      @new_start_points.push(ep2)
    
    @ctx.strokeStyle = if @length < 4 then "green" else "brown"
    @ctx.stroke()

    @start_points = @new_start_points

    if @x < @numberOfTrees + 1
      if (@length > 2)
        setTimeout(@branches.bind(@), 50)
      else
        setTimeout(@init.bind(@), 47)
  get_endpoint: (x, y, a, length)->
    x: x + length * Math.cos(a*Math.PI/180),
    y: y + length * Math.sin(a*Math.PI/180)


canvas = document.getElementById("florest")
florest = new Florest(canvas)
