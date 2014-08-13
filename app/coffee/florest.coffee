
class Tree
  constructor: (florest, info ) ->
    @info = info
    @florest = florest
    @ctx = @florest.ctx
    @length = @info.length || 25
    @divergence = @info.divergence || 12 
    @reduction = @info.reduction || 0.8
    @line_width = @info.line_width || 3
    @drawTrunk()
    @drawBranches()
  drawTrunk: ->
    @trunk = {x: @florest.numberOfTrees * @step, y: @length, angle: 90}
    @start_points = []
    @start_points.push(@trunk)
    @ctx.beginPath()
    @ctx.moveTo(@trunk.x, @height-5)
    @ctx.lineTo(@trunk.x, @height-@trunk.y)
    @ctx.strokeStyle = "brown"
    @ctx.lineWidth = @line_width
    @ctx.stroke()

  drawBranches: ->
    @length = @length * @reduction
    @line_width = @line_width * @reduction
    @ctx.lineWidth = @line_width
    @new_start_points = []
    @ctx.beginPath()
    self = @
    for sp in @start_points
      ep1 = self.endPoint(sp.x, sp.y, sp.angle+self.divergence, self.length)
      ep2 = self.endPoint(sp.x, sp.y, sp.angle-self.divergence, self.length)
      self.ctx.moveTo(sp.x, self.height-sp.y)
      self.ctx.lineTo(ep1.x, self.height-ep1.y)
      self.ctx.moveTo( sp.x, self.height-sp.y)
      self.ctx.lineTo(ep2.x, self.height-ep2.y)
      ep1.angle = sp.angle+@divergence
      ep2.angle = sp.angle-@divergence
      @new_start_points.push(ep1)
      @new_start_points.push(ep2)
    
    @ctx.strokeStyle = if @length < 4 then "green" else "brown"
    @ctx.stroke()

    @start_points = @new_start_points

    if @treeNumber < @numberOfTrees + 1
      if (@length > 2)
        setTimeout(@florest.drawTrees.bind(@florest), 50)
      else
        setTimeout(@drawBranches.bind(@), 50)

  endPoint: (x, y, a, length)->
    x: x + length * Math.cos(a*Math.PI/180),
    y: y + length * Math.sin(a*Math.PI/180)


class Florest
  constructor: (canvas, numberOfTrees = 5) ->
    @canvas = canvas
    @ctx = @canvas.getContext("2d")
    @width = window.innerWidth
    @height = window.innerHeight / 4
    @canvas.width = @width
    @canvas.height = @height
    @treeNumber = 0
    @numberOfTrees = numberOfTrees
    @step = @width / @numberOfTrees * 0.63
    @tree = []
    @drawTrees()
  drawTrees: () ->
    if @treeNumber < @numberOfTrees
      @treeNumber += 1
    else
      return
    new Tree(@, length: 5*@numberOfTrees, divergence: 15 * (1+(@treeNumber % 4)), reduction: 0.8, line_width: 2+@treeNumber)



canvas = document.getElementById("florest")
florest = new Florest(canvas, 4)
